import { defineField, defineType } from "sanity";

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            validation: (rule) => rule.min(10).max(30),
        }),
        defineField({
            name: "details",
            title: "Details",
            type: "string",
            description: "Describe yourself",
            validation: (text) => text.min(100),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
    ]
})