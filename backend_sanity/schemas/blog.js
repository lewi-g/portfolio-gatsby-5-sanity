import {format} from 'date-fns'
import {GiNotebook} from 'react-icons/gi'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'datetime',
    },
    {
      name: 'categories',
      title: 'Categories/Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
      // type: 'reference',
      // to: [{type: 'customImage'}],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'normalText',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishDate: 'publishDate',
    },
    prepare({title, publishDate}) {
      return {
        title,
        subtitle: publishDate ? format(new Date(publishDate), 'p, MM/dd/yyyy') : '',
      }
    },
  },
}
