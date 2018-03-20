<template>
  <v-app id="app-main">
      <v-toolbar flat dark style="-webkit-app-region: drag;opacity:.6;" height="32">
          <v-btn fab color="red" flat @click="closeWin" style="width:28px;height:28px">x</v-btn>
      </v-toolbar>
      <v-container app>
        <v-card ripple>
            <v-card-title>{{ info.cpu }}</v-card-title>
        </v-card>
      </v-container>
  </v-app>
</template>
<script>
import {ipcRenderer} from 'electron';
export default {
    data(){
        return {
            info:{
                cpu: process.memoryUsage()
            }
        }
    },
    mounted(){
    },
    methods:{
        closeWin(){
            ipcRenderer.send('close')
        }
    },

}
</script>
