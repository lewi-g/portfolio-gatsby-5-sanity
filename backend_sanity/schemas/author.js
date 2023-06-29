import {MdPerson} from 'react-icons/md'
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'customImage',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: '90',
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
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
