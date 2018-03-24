<template>
  <v-navigation-drawer temporary fixed  right v-model="drawer" :style="{ marginTop : marginTop }">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-dialog transition="slide-y-transition" v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">A setting dialog</v-card-title>
          <v-card-text>......</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" flat @click.native="dialog = false">Cancel</v-btn>
            <v-btn flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-list-tile ripple @click="openDialog">
        <v-list-tile-action>
          <v-icon>build</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Setting</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {TITLE_BAR_HEIGHT} from "../../constants";

  export default {
    name      : 'navigation',
    data() {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        marginTop : TITLE_BAR_HEIGHT,
        dialog : false
      };
    },
    computed:{
      drawer : {
        get() {
          return this.$store.getters.navOpen;
        },
        set(v){
          this.$store.commit('toggleNav', v);
        }
      }
    },
    components: {},
    methods   : {
      openDialog(){
        this.dialog = true;
        this.drawer = false;
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>
