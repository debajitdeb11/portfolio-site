import { defineField, defineType } from "sanity";

export default defineType({
    name: "social",
    title: "Social",
    type: "document",

    fields: [
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alt',
            type: 'string',
            validation: (text) => text.required()
        })
    ]
})