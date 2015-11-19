<template lang="jade">
div
  h1 {{msg}}
  hr
</template>

<script>
export default {
  data () {
    return {
      msg: '测试'
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
