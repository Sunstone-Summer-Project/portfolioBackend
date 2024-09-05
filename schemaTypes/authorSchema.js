const authorSchema = {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'A short biography of the author'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'A short description of the image for accessibility purposes',
          validation: Rule => Rule.error('You have to fill out the alternative text.').required()
        }
      ]
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.email().error('Please enter a valid email address')
    },
   
    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media Links',
      of: [{ type: 'url' }],
      description: 'Links to social media profiles'
    }
  ]
};

export default authorSchema;
