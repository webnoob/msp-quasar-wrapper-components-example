<template>
  <q-radio
    ref="mspRadio"
    v-bind="$attrs"
    v-on="$listeners"
    :label="label"
  />
</template>

<script>
import mspFormComponent from './mixins/mspFormComponent.js'

export default {
  inheritAttrs: false,
  name: 'mspRadio',
  mixins: [
    mspFormComponent
  ]
}
</script>
