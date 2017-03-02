<template>
  <component-doc
    :component-name="componentName"
    :props='meta.props' >
    <blockquote>
      This is a placeholder element.
      Copy @/components/pages/docs/TodoDocs.vue and start experimenting with your components.</blockquote>

    <!-- example code: -->
    <pre><code class='prettyprint' >
    import ComponentDoc from '@/components/docs/ComponentDoc'
    export default {
      name: 'HelloDocs',
      components: { Hello, ComponentDoc }
    }
    </code></pre>

    <div slot='example-desktop' >
      <todo ></todo>
    </div>
    <div slot='example-mobile' >
        <todo ></todo>
    </div>

  </component-doc>
</template>
<script type="text/javascript">
// change this to your component:
import Todo from '../../docs/Todo'
import ComponentDoc from '../../docs/ComponentDoc'
export default {
  name: 'HelloDocs',
  components: {
    Todo,
    ComponentDoc
  },
  computed: {
    componentName () {
      return this.$route.name
    }
  },
  data () {
    return {
      meta: {
        // props, events and slots get documented here:
        props: [
          { name: 'message',
            type: '<code>String</code>',
            required: true,
            default: 'None',
            description: '...'
          }
        ]
      }
    }
  }
}
</script>
