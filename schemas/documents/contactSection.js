export default {
    name: 'contactSection',
    type: 'document',
    title: 'Contact section',
    fields: [
        
        {
            name:'contactSectionTitle',
            type:'textBlock',
            title:'Contact section title'
        },
        {
            name:'contactSectionText',
            type:'textBox',
            title:'Contact section text'
        },
        {
            name:'contactSectionForm',
            type: 'formBody',
            title: 'Contact section form'
        }  
    ],
    preview: {
        select: {
            title: 'Contact Section'
        },
        prepare ({title = 'Contact Section'}) {
            return {
                title
            }
        }
    }

}