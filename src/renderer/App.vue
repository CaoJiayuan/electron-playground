<template>
    <v-app id="app-main">
      <v-toolbar app id="title-bar" flat fixed :height="titleBarHeight">
        <v-spacer></v-spacer>
        <v-toolbar-title>EvueDemo</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
        <div style="height: 34px;width: 100%;"></div>
      </v-content>
      <v-footer app color="grey darken-2" fixed style="min-height: 24px" height="24">
        <v-spacer></v-spacer>
        <div class="text--white">EvueDemo &copy;2017-{{ new Date().getFullYear() }}</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'evue-demo',
    data(){
      return {
        titleBarHeight : 32
      }
    }
  }
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
</style>
