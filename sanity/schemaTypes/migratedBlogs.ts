import { defineType, defineField } from 'sanity'

export const MigratedBlogType = defineType({
    name: 'migrated_blogs',
    title: 'Migrated Blogs',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'table' } // ✅ Enables tables
            ],
            validation: (Rule) => Rule.required(),
        }),



        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    'Development', 'Design', 'Marketing', 'Business',
                    'Education', 'Lifestyle', 'Artificial Intelligence', 'Branding', 'Article', 'Blog'
                ],
            },
            initialValue: 'Development',
        }),

        defineField({
            name: 'blogCategory',
            title: 'Blog Category',
            type: 'string',
            options: {
                list: ['spawnpoint'],
            },
            initialValue: 'spawnpoint',
            validation: (Rule) => Rule.required(),
        }),

        // ✅ Image upload field (Main Image)
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Describe the image for accessibility and SEO.',
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        // ✅ Banner Image upload field
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
        }),

        defineField({
            name: 'quotes',
            title: 'Quotes',
            type: 'text',
        }),

        defineField({
            name: 'conclusion',
            title: 'Conclusion',
            type: 'text',
        }),

        // ✅ Subsections
        defineField({
            name: 'subsections',
            title: 'Subsections',
            type: 'array',
            validation: (Rule) => Rule.max(40),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'subtitle',
                            title: 'Subtitle',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'subdescription',
                            title: 'Sub Description',
                            type: 'array',
                            of: [{ type: 'text' }],
                        }),
                        defineField({
                            name: 'lists',
                            title: 'Lists',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'listTitle',
                                            title: 'List Title',
                                            type: 'string',
                                        }),
                                        defineField({
                                            name: 'listDescription',
                                            title: 'List Description',
                                            type: 'text',
                                        }),
                                        defineField({
                                            name: 'items',
                                            title: 'Items',
                                            type: 'array',
                                            of: [
                                                {
                                                    type: 'object',
                                                    fields: [
                                                        defineField({
                                                            name: 'title',
                                                            title: 'Item Title',
                                                            type: 'string',
                                                            validation: (Rule) => Rule.required(),
                                                        }),
                                                        defineField({
                                                            name: 'description',
                                                            title: 'Item Description',
                                                            type: 'text',
                                                        }),
                                                    ],
                                                },
                                            ],
                                        }),
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),

        // ✅ FAQs
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),

        defineField({
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})
