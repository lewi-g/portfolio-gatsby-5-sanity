import {MdStar} from 'react-icons/md'

export default (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.listItem()
        .title('Featured')
        .id('featuredItems')
        .icon(MdStar)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter((item) => !['featured'].includes(item.getId())),
    ])
