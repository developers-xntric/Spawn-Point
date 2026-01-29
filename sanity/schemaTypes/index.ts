import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogType,
  ],
}
