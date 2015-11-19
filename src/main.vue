<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt=""></div>
      <div class="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i4/TB10rkPGVXXXXXGapXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt=""></div>
      <div class="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1kQI3HpXXXXbSXFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  components: {
  },
  ready: function(){
    this.$data.title = "萌娃吃相大比拼";
    /*$(".swiper-container").swiper();*/
  }
}
</script>

<style lang="stylus">
</style>
