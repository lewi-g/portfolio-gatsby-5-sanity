import {MdCategory} from 'react-icons/md'

export default {
  name: 'category',
  title: 'Category/Tags',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'categoryImage',
      title: 'Category Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({title, image, slug}) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      }
    },
  },
}
