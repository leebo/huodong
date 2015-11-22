<template>
<div class="content margin-bottom-lg">
  <div class="card">
    <div class="card-header">活动奖品说明</div>
    <div class="card-content">
      <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">活动参赛要求</div>
    <div class="card-content">
      <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">活动投票须知</div>
    <div class="card-content">
      <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
    </div>
  </div>
</div>
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

