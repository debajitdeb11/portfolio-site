import { defineField, defineType } from "sanity";

export default defineType({
    name: "projects",
    title: "Projects",
    type: "document",

    fields: [
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (text) => text.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (text) => text.min(20)
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (image) => image.required()
        }),
        defineField({
            name: 'liveLink',
            title: 'Live Link',
            type: 'url',
        })
    ]
})