import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files"

const AUTHOR = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string', required: true }
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: { type: 'string', required: true },
    author: {
      type: 'nested',
      of: AUTHOR,
      required: true
    }
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace('.md', '') },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })