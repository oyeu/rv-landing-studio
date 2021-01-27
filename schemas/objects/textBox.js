export default {
    name: 'textBox',
    type: 'array',
    title: 'Text box',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
            marks: {
                decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'}
                ],
                annotations: []
            }
        }
        ]
}