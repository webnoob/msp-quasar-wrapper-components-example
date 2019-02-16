<template>
  <q-input
    ref="mspInput"
    v-bind="$attrs"
    v-on="$listeners"
    v-on:keyup.enter.native="v => { $emit('enterPress', v) }"
    :rules="rules"
    :label="label"
    dense
    lazy-rules
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
  </q-input>
</template>

<script>
import formValidationMixin from './mixins/formValidationMixin.js'
import mspFormComponent from './mixins/mspFormComponent.js'

export default {
  inheritAttrs: false,
  name: 'MspInput',
  mixins: [
    formValidationMixin,
    mspFormComponent
  ]
}
</script>
