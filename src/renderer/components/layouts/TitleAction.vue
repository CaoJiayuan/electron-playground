<template>
  <span style="margin: 0;padding: 0" class="title-action">
    <v-btn flat @click="closeWin" class="title-btn close" color="red">
      <v-icon>close</v-icon>
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
    components: {},
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
.title-action
  position: absolute

$title-btn-size: 18px

.title-btn
  height: $title-btn-size
  width: $title-btn-size
  min-width: $title-btn-size
  border-radius: 100%
  i
    font-size: $title-btn-size

</style>
