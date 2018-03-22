<template>
    <v-container grid-list-md id="app-body" app ref="wrapper">
        <v-layout row wrap>
            <v-flex md6  :key="i"  v-for="(item, i) in items">
                <v-card ripple :key="i">
                    <v-card-title><span>{{ item.name }}</span></v-card-title>
                    <v-card-media height="320" :src="'https://lorempixel.com/480/480/?2545' + i">
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

  export default {
    components: {},
    data () {
      return {
        items: [
          {
            name : '张三',
          },
          {
            name : '赵四',
          },
        ]
      }
    },
    mounted () {

    },
    methods: {

    },

  }
</script>
