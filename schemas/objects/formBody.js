export default {
    name: 'formBody',
    type: 'object',
    title: 'Contact form body',
    fields: [
        {
            name:'nameInputPlaceholder',
            type:'string',
            title:'Name input placeholder '
        },
        {
            name:'emailInputPlaceholder',
            type:'string',
            title:'Email input placeholder '
        },
        {
            name:'companyNameInputPlaceholder',
            type:'string',
            title:'Company name input placeholder '
        },
        {
            name:'bPOSolutionList',
            type:'bPOSolutionList',
            title:'BPO Solution List'

        },
        {
            name:'goalsInputPlaceholder',
            type:'string',
            title:'Goals input placeholder'

        },
        {
            name:'submitButtonText',
            type:'string',
            title:'Submit button text'

        }

        
    ]

}