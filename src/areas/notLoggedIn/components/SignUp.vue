<template>
  <msp-form ref="signUpForm">
    <msp-input
      v-model="companyName"
      t-label="companyName"
      required
    >
      <template v-slot:prepend>
        <q-icon name="business" />
      </template>
    </msp-input>

    <div class="row">
      <div class="col-12 col-lg-6">
        <msp-input
          v-model="firstName"
          t-label="firstName"
          required
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </msp-input>
      </div>

      <div class="col-12 col-lg-6">
        <msp-input
          v-model="lastName"
          t-label="lastName"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </msp-input>
      </div>
    </div>

    <msp-input
      v-model="username"
      t-label="emailAddress"
      required
      :validation="['email']"
    >
      <template v-slot:prepend>
        <q-icon name="email" />
      </template>
    </msp-input>

    <div class="row">
      <div class="col-12 col-lg-6">
        <msp-input
          v-model="password"
          t-label="password"
          :minLength="6"
          required
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </msp-input>
      </div>
      <div class="col-12 col-lg-6">
        <msp-input
          v-model="confirmPassword"
          t-label="confirmPassword"
          type="password"
          :minLength="6"
          :sameAs="{name: 'password', value: password}"
          required
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </msp-input>
      </div>
    </div>

    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon name="info" />
        </q-item-section>

        <q-item-section align="left">{{$t('signUpPrivacyNotice')}}</q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <msp-radio
            dense
            t-label="noThanks"
            v-model="marketing"
            val="0"
          />
        </q-item-section>

        <q-item-section>
          <msp-radio
            dense
            t-label="yesPlease"
            v-model="marketing"
            val="1"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div class="row justify-end q-pt-md">
      <msp-btn
        color="primary"
        validate
        loader
        require-online
        label="Sign Up"
        class="col-12"
        @click="submitForm"
      >
        <span slot="loading">Signing Up ...</span>
      </msp-btn>
    </div>

    <p class="q-mt-md">By continuing you acknowledge that you have read, understood, agree to the terms and conditions and privacy policy below.</p>
    <router-link to="/login">Privacy policy</router-link> | <router-link to="/login">Terms and Conditions</router-link>
  </msp-form>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    submitForm () {
      if (this.$refs.signUpForm.validate()) {
        this.$q.notify('It all worked!')
      }
    }
  },
  data () {
    return {
      companyName: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      marketing: '0',
      selectedSubscription: null
    }
  }
}
</script>

<style scoped>

</style>
