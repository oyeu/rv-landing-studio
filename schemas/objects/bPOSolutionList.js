export default {
    name: 'bPOSolutionList',
    type: 'object',
    title: 'BPO solutions List',
    fieldsets: [
        {name: 'solutions', title: 'BPO solutions'}
    ],
    fields: [
        {
            name:'bPOSolutionInputPlaceholder',
            type:'string',
            title:'Solution input placeholder'
        },
        {
            name:'bPOSolutions',
            type:'array',
            title:'Solutions list',
            of: [{type:'string'}]
        }
    ]

}