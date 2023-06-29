import {MdCode} from 'react-icons/md'

export default {
  icon: MdCode,
  name: 'customCode',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
      options: {
        withFilename: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'code.code',
    },
  },
}
