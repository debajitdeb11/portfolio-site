import { defineField, defineType } from 'sanity';

const regexForPhoneNumber = '^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$';

export default defineType({
  name: 'pageInfo',
  title: 'Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'heroSildeContent',
      title: 'Hero Slide Content',
      type: 'array',
      description: 'Content you want to display in slide',
      of: [
        {
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (text) => text.error('Please Enter a valid email!'),
    }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'social',
          },
        },
      ],
    }),
  ],
});
