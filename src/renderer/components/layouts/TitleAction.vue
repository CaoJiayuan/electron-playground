<template>
  <span style="margin: 0 5px;padding: 0" class="title-action" :style="{ right : isWin ? 0 : undefined }">
    <v-btn  @click="closeWin" icon class="title-btn close" :class="isWin ? 'pull-right' : 'pull-left' " color="red">
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn @click="maxWin" icon class="title-btn max" :class="isWin ? 'pull-right' : 'pull-left' "  color="yellow">
      <v-icon>code</v-icon>
    </v-btn>
    <v-btn @click="miniWin" icon class="title-btn mini" :class="isWin ? 'pull-right' : 'pull-left' "  color="green">
      <v-icon>remove</v-icon>
    </v-btn>
  </span>
</template>

<script>
  import {ipcRenderer} from 'electron';

  export default {
    name : 'title-action',
    data() {
      return {};
    },
    computed  : {
      isWin() {
        return process.platform === 'win32';
      }
    },
    components: {},
    methods   : {
      closeWin() {
        ipcRenderer.send('close');
      },
      miniWin(){
        ipcRenderer.send('mini')
      },
      maxWin(){
        ipcRenderer.send('max')
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>
<style lang="sass">

.title-action
  z-index: 1002

$title-btn-size: 14px

.title-btn
  height: $title-btn-size
  width: $title-btn-size
  min-width: $title-btn-size
  border-radius: 100%
  margin: 0 3px
  i
    font-size: $title-btn-size - 2px
    display: none

.title-btn.max
  transform: rotate(-45deg)

.title-btn:hover
  i
    display: block
</style>
