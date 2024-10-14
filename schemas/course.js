export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'shortIntroduction',
      title: 'Short Introduction',
      type: 'text',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      description: 'Upload or select a video for the course'
    },
    {
      name: 'keyDeliverables',
      title: 'Key Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ]
}
