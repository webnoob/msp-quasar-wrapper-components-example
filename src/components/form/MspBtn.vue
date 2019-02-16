<template>
  <q-btn
    v-bind="$attrs"
    v-on="$listeners"
    ref="mspBtn"
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
  </q-btn>
</template>

<script>
import mspFormComponent from './mixins/mspFormComponent.js'

export default {
  inheritAttrs: false,
  name: 'MspBtn',
  mixins: [
    mspFormComponent
  ]
}
</script>
