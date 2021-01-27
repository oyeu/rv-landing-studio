export default {
    name: 'section',
    type: 'document',
    title: 'Section',
    fields: [
        
        {
            name:'sectionTitle',
            type:'textBlock',
            title:'Title'
        },
        {
            name:'sectionText',
            type:'textBox',
            title:'Section text'
        },
        {
            name:'backgroundImage',
            type:'imageInput',
            title:'Background image'
        }, 
        {
            name:'sectionImage',
            type:'imageInput',
            title:'Section image'
        },
        {
            name:'sectionIcon',
            type:'imageInput',
            title:'Section icon'
        }, 
        {
            name:'buttonText',
            type:'string',
            title:'Call to action button text'
        },
        {
            name:'cards',
            type:'array',
            title: 'Cards',
            of: [{type:'card'}]
        },
        {
            name:'positionTag',
            type:'number',
            title:'Position Tag',
            options: {
                list:[{value:1,title:'section 1'},
                {value:2,title:'section 2'},
                {value:3,title:'section 3'},
                {value:4,title:'section 4'},
                {value:5,title:'section 5'},]
            }
        }

        
        
    ],
    preview: {
        select: {
            title: 'positionTag'
        },
        prepare ({title = 'no title'}) {
            return {
                title
            }
        }
    }

}