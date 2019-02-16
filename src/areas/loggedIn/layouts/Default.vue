<template>
  <q-layout view="hHr lpR fFr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-py-sm">
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="justify">
        <q-route-tab icon="fas fa-home" to="/" exact hide="label" label="Dashboard" />
        <q-route-tab icon="far fa-calendar-alt" to="/planner" exact hide="label" label="Planner" />
        <q-route-tab icon="fas fa-gavel" to="/debts" exact hide="label" label="Debts" />
        <q-route-tab icon="far fa-file-alt" to="/worksheets" exact hide="label" label="Worksheets" />
        <q-route-tab icon="fas fa-briefcase" to="/jobs" exact hide="label" label="Jobs" />
        <!--<q-route-tab icon="far fa-envelope-open" to="/quotes" exact hide="label" label="Quotes" />-->
        <q-route-tab icon="far fa-address-card" to="/customers" exact hide="label" label="Customers" />
        <q-route-tab icon="fas fa-balance-scale" to="/accounts" name="accounts" exact hide="label" label="Accounts" />
        <q-route-tab icon="fas fa-th-list" to="/list-manager" exact hide="label" label="Lists" />
        <q-route-tab icon="fas fa-cogs" to="/system" exact hide="label" label="System" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="right" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar color="primary">
        <q-toolbar-title class="row justify-between items-center gt-xs text-subtitle2">
          <span>&copy; <a href="https://www.myserviceplanner.com" target="_blank" class="text-white">My Service Planner</a> - v{{version}}</span>
          <span class="on-right">
            <a href="https://discord.gg/KN36JB" target="_blank" style="color:white;" class="on-left">Support Forum</a>
            <q-btn color="white" text-color="black" size="sm">Support</q-btn>
          </span>
        </q-toolbar-title>
        <q-toolbar-title class="row justify-center items-center lt-sm text-subtitle2">
          <span>v{{version}}</span>
          <span class="on-right">
            <a href="https://discord.gg/KN36JB" target="_blank" style="color:white;" class="on-left">Support Forum</a>
            <q-btn color="white" text-color="black" icon="far fa-question-circle" size="sm"/>
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      right: true,
      version: '2.0.0-alpha.0'
    }
  }
}
</script>
