<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MspForm',
  methods: {
    validate () {
      let errors = false
      for (let child of this.$children) {
        let component = child._vnode.componentInstance
        if (component && component.rules && component.rules.length > 0) {
          component.validate()
          errors |= component.hasError
        }
      }

      if (errors) {
        this.$q.notify({
          message: 'Form has some invalid fields.',
          color: 'negative',
          position: 'bottom'
        })
      }

      return !errors
    }
  }
}
</script>
