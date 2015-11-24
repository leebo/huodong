<template>
<div class="content margin-bottom-lg">
  <div class="list-block margin-top-sm margin-bottom-sm">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">宝贝昵称</div>
            <div class="item-input">
              <input type="text" v-model="user.name" placeholder="请填写萌娃姓名">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">宝贝年龄</div>
            <div class="item-input">
              <input type="number" v-model="user.age" placeholder="请填写萌娃年龄">
            </div>
          </div>
        </div>
      </li>
     <li class="align-top">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">参赛宣言</div>
            <div class="item-input">
              <textarea v-model="user.title" placeholder="请填写参赛宣言，五个字以上"></textarea>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block margin-top-0">
    <div class="row">
      <div class="col-50"><a href="javascript:void(0)" class="button button-sm button-fill button-danger" v-on:click="cancel">重 填</a></div>
      <div class="col-50"><a href="javascript:void(0)" class="button button-sm button-fill button-success" v-on:click="save">提 交</a></div>
    </div>
  </div>
</div>
</template>

<script>
var Util = require('../util.js')
export default {
  props: ['title'],
  data () {
    return {
      user: {},
      openid: localStorage.getItem("openid"),
    }
  },

  components: {
  },

  created: function(){
    $.showIndicator()

    Util.setWxConfig()

    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: "apply",
        desc: "testtetetstst",
        link: "http://test.xj8.net/#!/apply",
        imgUrl: '',
        success: function () {
          // 用户确认分享后执行的回调函数
          alert("谢谢您的分享");
        },
      })

      wx.onMenuShareTimeline({
        title: "ttt1", // 分享标题
        link: "http://www.baidu.com",
        imgUrl: '',
        success: function () {
          alert("谢谢您的分享");
        }
      })
    })
  },

  ready: function(){
    this.title = "活动报名"

    $.hideIndicator()
  },

  methods: {
    save: function(){
      $.toast("活动报名成功");
    },
    cancel: function(){
      var that = this;
      $.confirm('是否确认要取消报名', function(){
        that.user = {}
      });
    },
  },
}
</script>
