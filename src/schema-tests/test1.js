const Ajv = require('ajv')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 10,
      // test: false,
      // format: 'test',
    },
  },
}

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

// format
// ajv.addFormat('test', (data) => {
//   return data === 'haha'
// })

// keyword
ajv.addKeyword('test', {
  // validate(schema, data) {
  //   console.log(schema, data)
  //   if (schema) return true
  //   else return schema.length === 6
  // },
  // macro() {
  //   return {
  //     minLength: 10,
  //   }
  // },
})
const validate = ajv.compile(schema)
const valid = validate({
  name: 'haha',
})
if (!valid) console.log(validate.errors)
