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
  <div class="content pull-to-refresh-content infinite-scroll" data-distance="100" style="padding-bottom: 50px" track-by="id" data-ptr-distance="55">
    <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
    </div>
  <div class="card demo-card-header-pic" transition="fade" v-for="post in posts | filterBy q in 'id' | orderBy 'id' -1 ">
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
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>
  </div>
</div>
</template>

<script>
// 添加'refresh'监听器
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
  },

  ready: function(){
    this.title = "活动排行榜"
    var resource = this.$resource('http://localhost:3000/posts');
    $(document).on('refresh', '.pull-to-refresh-content',function(e) {
        resource.get(function(data, status, request){
          this.posts = data
          $.pullToRefreshDone('.pull-to-refresh-content');
        })
    })
  },

  methods: {
    save: function(){
      var resource = this.$resource('http://localhost:3000/posts/:id');
      resource.save({}, {post: this.new_post}, function(data){
        $.toast("保存成功");
        this.new_post = {title: "", author: ""}
      })
    },
    delete: function(post_id, index){
      var resource = this.$resource('http://localhost:3000/posts/:id');
      resource.delete({id: post_id}, function(data){
        this.posts.splice(index, 1)
        $.toast("删除成功");
      })
    },
  },

  route: {
    data: function (transition) {
      var resource = this.$resource('http://localhost:3000/posts');
      resource.get(function(data, status, request){
        transition.next({
          posts: data
        })
        $.hideIndicator()
      })
    }
  }
}
</script>
