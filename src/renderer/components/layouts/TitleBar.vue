<template>
  <v-toolbar app id="title-bar" flat fixed dense :height="titleBarHeight">
    <template v-if="!isWin">
      <v-btn flat @click="closeWin" class="title-btn">
          <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <v-toolbar-title class="dragger">EvueDemo</v-toolbar-title>
    <v-spacer class="dragger" :style="{height : titleBarHeight + 'px'}"></v-spacer>
    <template v-if="isWin">
        <v-btn flat @click="closeWin" class="title-btn">
            <v-icon>close</v-icon>
        </v-btn>
    </template>  
  </v-toolbar>
</template>

<script>
  import {ipcRenderer} from 'electron'
  export default {
    name: 'title-bar',
    data() {
      return {
        titleBarHeight: 32
      };
    },
    computed: {
      isWin(){
        return process.platform === 'win32'
      }
    },
    components: {},
    methods   : {
      closeWin(){
        ipcRenderer.send('close')
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>
<style lang="sass">
  $title-btn-size: 32px

  .title-btn
    height: $title-btn-size
    width: $title-btn-size
    min-width: $title-btn-size

</style>