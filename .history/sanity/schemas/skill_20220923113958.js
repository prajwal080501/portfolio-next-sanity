export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of the Skill',
            type: 'string',
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progresss of Skill from 0 to 100',
            validation: (Rule) => Rule.min(0).max(100),
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            opations: {
                hotspot: true,
            }
        },
    ],
}
