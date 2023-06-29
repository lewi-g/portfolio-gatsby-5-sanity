import {MdImage} from 'react-icons/md'

export default {
  icon: MdImage,
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.error('Alt can not be empty').required(),
      options: {
        isHighlithed: true,
      },
    },
  ],
}
