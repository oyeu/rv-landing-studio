// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'


// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//document schemas
import section from './documents/section'
import header from './documents/header'
import contactSection from './documents/contactSection'
import footer from './documents/footer'

//Object types
import card from './objects/card'
import imageInput from './objects/imageInput'
import textBox from './objects/textBox'
import textBlock from './objects/textBlock'
import bPOSolutionList from './objects/bPOSolutionList'
import formBody from './objects/formBody'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    footer,
    formBody,
    bPOSolutionList,
    contactSection,
    section,
    imageInput,
    textBox,
    card,
    textBlock,
    header
  ]),
})
