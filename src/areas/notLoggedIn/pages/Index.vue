<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="row justify-center">
    <div class="column col col-sm-8 col-md-6 bg-white">
      <q-toolbar class="bg-grey-5" align="left">
        <q-toolbar-title >
        </q-toolbar-title>
      </q-toolbar>

      <div class="q-pa-md">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="signin" :label="$t('signIn')" />
          <q-tab name="signup" :label="$t('signUpForFree')" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="signin">
            <login-form />
          </q-tab-panel>

          <q-tab-panel name="signup">
            <sign-up />
          </q-tab-panel>
        </q-tab-panels>

      </div>
    </div>
  </q-page>
</template>

<script>
import LoginForm from 'src/areas/notLoggedIn/components/LoginForm'
import SignUp from '../components/SignUp'

export default {
  name: 'NotLoggedInIndex',
  components: { SignUp, LoginForm },
  data () {
    return {
      tab: 'signin',
      isPwd: true,
      username: '',
      password: ''
    }
  }
}
</script>

<style>
</style>
