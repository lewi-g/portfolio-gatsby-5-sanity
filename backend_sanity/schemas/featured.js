import {MdStar} from 'react-icons/md'

export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Featured Blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
    {
      name: 'tags',
      title: 'Featured Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
}
