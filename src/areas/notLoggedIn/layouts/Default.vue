<template>
  <q-layout view="hHh lpR fFf" class="layout-bg text-center">
    <div id="hero" class="static-header hero-section">
      <div class="overlay"></div>

      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'NotLoggedInDefaultLayout'
}
</script>

<style lang="stylus" scoped>
  .logo
    max-width 100%

  .static-header
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    background-image: url("/assets/login-bg.jpg");

  .static-header .heading-block {
    position: relative;
    z-index: 0;
  }

  .static-header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ff6600;
    background: -moz-linear-gradient(-45deg, #ff6600 0%, rgba(255, 102, 0, 0.92) 25%, rgba(189, 24, 112, 0.78) 70%, rgba(189, 24, 112, 0.68) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, #ff6600), color-stop(25%, rgba(255, 102, 0, 0.92)), color-stop(70%, rgba(189, 24, 112, 0.78)), color-stop(100%, rgba(189, 24, 112, 0.68)));
    background: -webkit-linear-gradient(-45deg, #ff6600 0%, rgba(255, 102, 0, 0.92) 25%, rgba(189, 24, 112, 0.78) 70%, rgba(189, 24, 112, 0.68) 100%);
    background: -o-linear-gradient(-45deg, #ff6600 0%, rgba(255, 102, 0, 0.92) 25%, rgba(189, 24, 112, 0.78) 70%, rgba(189, 24, 112, 0.68) 100%);
    background: -ms-linear-gradient(-45deg, #ff6600 0%, rgba(255, 102, 0, 0.92) 25%, rgba(189, 24, 112, 0.78) 70%, rgba(189, 24, 112, 0.68) 100%);
    background: linear-gradient(135deg, #ff6600 0%, rgba(255, 102, 0, 0.92) 25%, rgba(189, 24, 112, 0.78) 70%, rgba(189, 24, 112, 0.68) 100%);
  }
</style>
