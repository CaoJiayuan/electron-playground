<template>
  <v-app id="app-main">
    <title-bar></title-bar>
    <v-content>
      <router-view></router-view>
      <div class="bottom-holder"></div>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppFooter from "./components/layouts/AppFooter.vue";
  import TitleBar from "./components/layouts/TitleBar.vue";

  export default {
    components: {
      TitleBar,
      AppFooter
    },
    name      : 'evue-demo',
    data() {
      return {
      };
    }
  };
</script>

<style lang="sass">
  /* CSS */
  @import "~material-design-icons/iconfont/material-icons.css"
  @import "~vuetify/dist/vuetify.css"
  @import "assets/styles/app"

  $title-btn-size: 20px

  .title-btn
    height: $title-btn-size
    width: $title-btn-size

  .bottom-holder
    height: $footer-height
    width: 100%
</style>
