<template>
  <v-toolbar app id="title-bar" flat fixed dense :height="titleBarHeight">
    <title-action v-if="!isWin"></title-action>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <v-toolbar-title class="dragger">EvueDemo</v-toolbar-title>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <title-action v-if="isWin"></title-action>
  </v-toolbar>
</template>

<script>
  import {ipcRenderer} from 'electron';
  import TitleAction from "./TitleAction.vue";

  export default {
    name      : 'title-bar',
    data() {
      return {
        titleBarHeight: 32
      };
    },
    computed  : {
      isWin() {
        return process.platform === 'win32';
      }
    },
    components: {TitleAction},
    methods   : {
      closeWin() {
        ipcRenderer.send('close');
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>
<style lang="sass">


</style>
