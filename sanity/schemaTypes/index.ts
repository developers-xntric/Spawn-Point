import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './postType'
import { MigratedBlogType } from './migratedBlogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogType,
    MigratedBlogType,
  ],
}
