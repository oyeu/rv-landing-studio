export default {
    name: 'card',
    type: 'object',
    title: 'Card',
    fields: [
        {
            name:'cardNumber',
            type:'number',
            title:'Card Number'
        },
        {
            name:'cardTitle',
            type:'string',
            title:'Card Title'
        },
        {
            name:'cardText',
            type:'textBox',
            title:'Card Text'
        },
        {
            name:'cardImage',
            type:'imageInput',
            title:'Card Image'
        }
    ]

}