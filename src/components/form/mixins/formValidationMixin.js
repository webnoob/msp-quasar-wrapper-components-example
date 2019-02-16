import isEmail from 'validator/lib/isEmail'

export default {
  props: {
    required: {
      type: Boolean
    },
    validation: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    setupValidation () {
      this.rules = this.validation
      if (this.required) this.rules.push(v => (v !== null && v !== '') || 'Required')
      if (this.rules.includes('email')) {
        this.rules.push(v => isEmail(v) || 'The email field must be a valid email')
      }
    }
  },
  created () {
    this.setupValidation()
  },
  beforeDestroy () {
    this.rules = []
  },
  data () {
    return {
      rules: []
    }
  }
}
