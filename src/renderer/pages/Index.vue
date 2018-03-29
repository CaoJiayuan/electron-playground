<template>
  <v-container grid-list-md id="app-body" app ref="wrapper">
    <v-layout row wrap>
      <v-flex xs1 :key="i" v-for="i in 256">
        <v-card :class="randomClass()" class="reveal" style="height: 256px;"></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import ScrollReveal from 'scrollreveal'
  export default {
    components: {},
    data () {
      return {
        colors: ['grey', 'white', 'black', 'pink', 'purple', 'yellow', 'blue', 'green', 'cyan'],
        shades: ['lighten-1', 'lighten-2', 'darken-1', 'darken2']
      }
    },
    mounted () {
      let rv = new ScrollReveal({duration: 1000, distance: '10rem', scale: 1, reset: true,})
      rv.reveal('.reveal')
    },
    methods: {
      randomEle (array) {
        let index = Math.floor((Math.random() * array.length))
        return array[index]
      },
      randomClass () {
        return this.randomEle(this.colors) + ' ' + this.randomEle(this.shades)
      }
    },

  }
</script>
