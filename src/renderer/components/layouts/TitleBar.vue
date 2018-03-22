<template>
  <v-toolbar app id="title-bar" flat fixed :height="titleBarHeight">
    <v-spacer></v-spacer>
    <v-toolbar-title>EvueDemo</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'title-bar',
    data() {
      return {
        titleBarHeight: 32
      };
    },
    components: {},
    methods   : {},
    mounted() {

    },
    created() {

    },

  };
</script>
