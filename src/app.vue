<template lang="jade">
div
  h1 {{msg}}
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
primary-color = #999
body
  font 100% font-stack
  color primary-color
.logo
  width 40px
  height 40px
</style>
