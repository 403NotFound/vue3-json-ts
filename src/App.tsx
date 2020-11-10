import { defineComponent, ref, Ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'

import { createUseStyles } from 'vue-jss'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

export default defineComponent({
  setup() {
    const SchemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        // TODO
      }
      SchemaRef.value = schema
    }

    const classRef = useStyles()

    return () => {
      const schema = toJson(SchemaRef.value)
      const classes = classRef.value
      return (
        <div>
          <MonacoEditor
            code={schema}
            title="Schema"
            onChange={handleCodeChange}
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
