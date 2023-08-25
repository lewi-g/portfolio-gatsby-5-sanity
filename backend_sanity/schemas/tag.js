import {MdCategory} from 'react-icons/md'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'name',
      title: 'Tag Name',
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
      name: 'tagImage',
      title: 'Tag Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'normalText',
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
