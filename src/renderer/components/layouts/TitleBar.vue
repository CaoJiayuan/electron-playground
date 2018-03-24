<template>
  <v-toolbar app id="title-bar" flat fixed dense :height="titleBarHeight">
    <title-action v-if="!isWin"></title-action>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <v-toolbar-title class="dragger">EvueDemo</v-toolbar-title>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <title-action v-if="isWin"></title-action>
    <v-btn icon v-if="!isWin" @click="toggleNav">
      <v-icon>dehaze</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import {ipcRenderer} from 'electron';
  import {mapGetters} from 'vuex';
  import TitleAction from "./TitleAction.vue";
  import {TITLE_BAR_HEIGHT} from "../../constants";

  export default {
    name      : 'title-bar',
    data() {
      return {
        titleBarHeight: TITLE_BAR_HEIGHT
      };
    },
    computed  : {
      isWin() {
        return process.platform === 'win32';
      },
      ...mapGetters({
        drawer : 'navOpen'
      })
    },
    components: {TitleAction},
    methods   : {
      closeWin() {
        ipcRenderer.send('close');
      },
      toggleNav(){
        this.$store.commit('toggleNav', !this.drawer)
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
