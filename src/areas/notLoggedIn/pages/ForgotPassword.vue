<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="row justify-center">

    <div class="column col col-sm-8 col-md-6 bg-white">
      <div class="q-pa-md">
        <div v-if="!token">
          <h1 class="text-h4">Password Reset</h1>
          <p>Please follow the instructions below in order to reset your password:</p>
          <ol class="text-left">
            <li>Enter the email address associated with your MSP account.</li>
            <li>Wait for the password reset email to arrive (check your spam folder if you're waiting for a long time)</li>
            <li>Follow the instructions in the email.</li>
          </ol>

          <msp-input
            v-model="username"
            :validation="{ required, email }"
            label="Email Address"
            type="email"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </msp-input>

          <div class="row justify-between q-mt-md">
            <msp-btn color="grey-6" to="/login" label="Back" />

            <msp-btn color="primary" validate loader @click="submit" class="pull-right" label="Reset Password">
              <span slot="loading">Requesting ...</span>
            </msp-btn>
          </div>
        </div>

        <div v-else-if="token">

          <div class="row">
            <div class="col-xs-5">
              <msp-input
                v-model="password"
                :validation="{ required }"
                float-label="Password"
                type="password"
                :minLength="6"
                :clearable="true"
              />
            </div>
            <div class="col-xs-6 offset-1">
              <msp-input
                v-model="confirmPassword"
                :validation="{ required }"
                float-label="Confirm Password"
                type="password"
                :minLength="6"
                :clearable="true"
                :sameAs="{name: 'password', value: password}"
              />
            </div>
          </div>
          <div class="group">
            <msp-btn color="faded" to="login">Cancel</msp-btn>

            <msp-btn color="primary" validate loader @click="reset" class="pull-right">
              Reset Password
              <span slot="loading">Resetting ...</span>
            </msp-btn>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import MspBtn from '../../../components/form/MspBtn'
import MspInput from '../../../components/form/MspInput'
export default {
  name: 'NotLoggedInIndex',
  components: { MspInput, MspBtn },
  data () {
    return {
      username: '',
      token: false
    }
  }
}
</script>

<style>
</style>
