export default {
    name: 'imageInput',
    type: 'image',
    title: 'Image input',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        options: {
          isHighlighted: true
        }
      }
    ],
    preview: {
      select: {
        imageUrl: 'asset.url',
        title: 'caption'
      }
    }
  }