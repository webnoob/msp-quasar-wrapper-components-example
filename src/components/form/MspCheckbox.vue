<template>
  <q-checkbox
    ref="mspCheckbox"
    v-bind="$attrs"
    v-on="$listeners"
    :label="label"
  />
</template>

<script>
import mspFormComponent from './mixins/mspFormComponent.js'

export default {
  inheritAttrs: false,
  name: 'mspCheckbox',
  mixins: [
    mspFormComponent
  ]
}
</script>
