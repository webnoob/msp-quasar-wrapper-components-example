export default {
  props: {
    tLabel: {
      type: String
    }
  },
  created () {
    this.label = this.tLabel ? this.$t(this.tLabel) : this.$attrs.label
  },
  data () {
    return {
      label: ''
    }
  }
}
