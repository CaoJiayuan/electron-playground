<template>
  <v-app id="app-main">
      <v-toolbar id="title-bar" fixed flat style="-webkit-app-region: drag" height="32">
          <v-btn fab color="red" flat @click="closeWin" style="width:28px;height:28px">x</v-btn>
      </v-toolbar>
      <v-container app ref="wrapper" :style="{height:height+'px'}">
          <div>
              <v-card ripple :key="i" v-for="(item, i) in items">
                  <v-card-title>{{ item.nickname }}</v-card-title>
              </v-card>
          </div>
      </v-container>
  </v-app>
</template>
<script>
import {ipcRenderer} from 'electron';
import BScroll from 'better-scroll'
export default {
    data(){
        return {
          height: 576,
          items : []
        }
    },
    mounted(){
      this.$http.get('http://demo.test/api/users').then(re => this.items = re.data.data)
//      this.$nextTick(() => new BScroll(this.$refs.wrapper))
    },
    methods:{
        closeWin(){
            ipcRenderer.send('close')
        }
    },

}
</script>
