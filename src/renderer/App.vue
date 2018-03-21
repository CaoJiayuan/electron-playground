<template>
  <div id="app">
    <v-toolbar id="title-bar" flat fixed :height="titleBarHeight">
      <v-spacer></v-spacer>
      <v-toolbar-title>EvueDemo</v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
  </div>
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
