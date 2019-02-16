<template>
  <q-select
    ref="mspSelect"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="boundValue"
    :label="label"
  >
    <slot
      v-for="(slot, key) in $slots"
      :name="key"
      :slot="key"
    />

    <template
      v-for="(slot, key) in $scopedSlots"
      :slot="key"
      slot-scope="scope"
    >
      <slot :name="key" v-bind="scope"/>
    </template>
  </q-select>
</template>

<script>
import mspFormComponent from './mixins/mspFormComponent.js'

export default {
  inheritAttrs: false,
  name: 'mspSelect',
  mixins: [
    mspFormComponent
  ],
  props: {
    value: {
      required: true
    }
  },
  data () {
    return {
      boundValue: this.value
    }
  }
}
</script>
