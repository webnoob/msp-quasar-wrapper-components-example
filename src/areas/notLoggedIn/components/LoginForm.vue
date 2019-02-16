<template>
  <msp-form ref="loginForm" >
    <msp-input
      t-label="emailAddress"
      v-model="username"
      required
      type="email"
      :validation="['email']"
      @enterPress="submitForm"
    >
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </msp-input>

    <msp-input
      v-model="password"
      t-label="password"
      :type="isPwd ? 'password' : 'text'"
      required
      @enterPress="submitForm"
    >
      <template v-slot:prepend>
        <q-icon name="lock" />
      </template>

      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </msp-input>

    <div class="row justify-xs-center justify-sm-between items-center">
      <router-link to="/login/forgot-password">{{$t('forgotPassword')}}</router-link>
      <msp-checkbox
        type="toggle"
        v-model="rememberMe"
        label="Remember me?"
      />
    </div>

    <div class="row justify-center">
      <msp-btn
        t-label="signIn"
        color="primary"
        class="col-12 q-mt-md"
        @click="submitForm"
      />
    </div>
  </msp-form>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    submitForm () {
      if (this.$refs.loginForm.validate()) {
        this.$q.notify('It all worked!')
      }
    }
  },
  data () {
    return {
      isPwd: true,
      username: '',
      password: '',
      rememberMe: false
    }
  }
}
</script>

<style scoped>

</style>
