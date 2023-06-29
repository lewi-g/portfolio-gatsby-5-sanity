export default {
  name: 'richText',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            name: 'link',
            title: 'URL',
            type: 'object',
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'customImage',
    },
    {
      type: 'customCode',
    },
  ],
}
