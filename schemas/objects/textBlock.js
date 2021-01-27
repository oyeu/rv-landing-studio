export default {
    name: 'textBlock',
    type: 'array',
    title: 'Text block',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'}],
            lists: [],
            marks: {
                decorators: [
                //{title: 'Strong', value: 'strong'},
                //{title: 'Emphasis', value: 'em'},
                //{title: 'Code', value: 'code'}
                ],
                annotations: []
            }
        }
        ]
}