<template>
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-on:click="goback">
      <span class="icon icon-left"></span>
      返回
    </a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    goback: function(){
      this.$route.router.go(window.history.back())
    }

  }
}
</script>
