import { defineField, defineType } from "sanity";

let isPresentSelected: boolean = false;

export default defineType({
    name: "experienceCard",
    title: "Experience Card",
    type: "document",
    fields: [
        defineField({
            name: "avatar",
            title: "Avatar",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Add your company logo",
        }),
        defineField({
            name: "companyName",
            title: "Company Name",
            description: "Name of the Company",
            type: "string",
            validation: (text) => text.required(),
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            description: "What's your role?",
            validation: (text) => text.required(),
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: "date",
            validation: (text) => text.required(),
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "date",
            readOnly: (value) => value.parent.present,
        }),
        defineField({
            name: "present",
            title: "Present",
            type: "boolean",
            initialValue: isPresentSelected,
            options: {
                layout: 'switch',
            }
        }),
        defineField({
            name: "highlights",
            title: "Highlights",
            description: "Enter highlights about your job",
            type: "array",
            of: [{
                type: 'string',
            }],
        })
    ]
})