<template>
<div class="content margin-bottom-lg">
  <div class="list-block margin-top-sm margin-bottom-sm">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">姓名</div>
            <div class="item-input">
              <input type="text" placeholder="请填写萌娃姓名">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">年龄</div>
            <div class="item-input">
              <input type="number" placeholder="请填写萌娃年龄">
            </div>
          </div>
        </div>
      </li>
     <li class="align-top">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">参赛宣言</div>
            <div class="item-input">
              <textarea placeholder="请填写参赛宣言，五个字以上"></textarea>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block margin-top-0">
    <div class="row">
      <div class="col-50"><a href="#" class="button button-sm button-fill button-danger">取消</a></div>
      <div class="col-50"><a href="#" class="button button-sm button-fill button-success">提交</a></div>
    </div>
  </div>
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
    this.$data.title = "活动报名"
  }
}
</script>
