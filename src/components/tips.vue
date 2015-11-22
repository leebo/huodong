<template>
  <div class="content margin-bottom-lg">{{user}}</div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      user: this
    }
  },
  components: {
  },
  ready: function(){
    this.$data.title = "活动说明"
  }
}
</script>

