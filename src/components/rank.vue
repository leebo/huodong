<template>
<div>
<div class="bar bar-header-secondary">
  <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search" for="search"></label>
      <input type="search" v-model="q" id='search' placeholder='输入关键字...'/>
    </div>
  </div>
  <input v-model="new_post.title">
  <input v-model="new_post.author">
  <button v-on:click="save">Greet</button>
</div>
  <div class="content margin-bottom-lg">
  <div class="card demo-card-header-pic" track-by="id" transition="fade" v-for="post in posts | filterBy q in 'id' | orderBy 'id' -1 ">
    <div valign="bottom" class="card-header color-white no-border no-padding">
      <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <p class="color-gray">发表于 2015/01/15</p>
        <p>{{post.title}}</p>
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="link">赞</a>
      <a v-on:click="delete(post.id, $index)" class="link">删除{{post.id}}</a>
    </div>
  </div>
 <!-- 加载提示符 -->
  </div>
</div>
</template>

<script>
var Util = require('../util.js')
export default {
  props: ['title'],
  data () {
    return {
      q: "",
      user: "",
      post: "",
      posts: [],
      new_post: {
        title: "",
        author: ""
      },
      notice: ""
    }
  },

  components: {
  },

  created: function(){
    $.showIndicator()

    Util.setWxConfig()

    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: "rank",
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
    this.title = "活动排行榜"
    var resource = this.$resource('http://192.168.1.130:3000/posts');
    $.hideIndicator()
  },

  methods: {
    save: function(){
      var resource = this.$resource('http://192.168.1.130:3000/posts/:id');
      resource.save({}, {post: this.new_post}, function(data){
        $.toast("保存成功");
        this.new_post = {title: "", author: ""}
      })
    },
    delete: function(post_id, index){
      var resource = this.$resource('http://192.168.1.130:3000/posts/:id');
      resource.delete({id: post_id}, function(data){
        this.posts.splice(index, 1)
        $.toast("删除成功");
      })
    },
  },

  route: {
    data: function (transition) {
      var resource = this.$resource('http://192.168.1.130:3000/posts');
      resource.get(function(data, status, request){
        transition.next({
          posts: data
        })
      })
    }
  }
}
</script>
