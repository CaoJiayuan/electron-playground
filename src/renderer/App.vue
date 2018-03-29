<template>
  <v-app id="app-main">
    <title-bar></title-bar>
    <navigation></navigation>
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
  import Navigation from "./components/layouts/Navigation.vue";

  export default {
    components: {
      Navigation,
      TitleBar,
      AppFooter
    },
    name      : 'evue-demo',
    data() {
      return {
      };
    },
    mounted(){

    }
  };
</script>

<style lang="sass">
  /* CSS */
  @import "~material-design-icons/iconfont/material-icons.css"
  @import "~vuetify/dist/vuetify.css"
  @import "assets/styles/app"


  .bottom-holder
    height: $footer-height
    width: 100%
</style>
