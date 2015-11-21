var Vue = require('vue')
var Main = require('./main.vue')
var Rank = require('./components/rank.vue')
var Tips = require('./components/tips.vue')
var Apply = require('./components/apply.vue')
var Menu = require('./components/shared/menu.vue')
var Titleheader = require('./components/shared/titleheader.vue')
require('../node_modules/zepto/zepto.min.js')
require('./assets/js/sm.js')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
Vue.use(require('vue-resource'));
var router = new VueRouter()
var App = Vue.extend({

  components: {
    menu: Menu,
    titleheader: Titleheader
  },

  methods: {
    goback: function(){
      this.$route.router.go(window.history.back())
    }
  }

})

$.init()

router.map({
  '/home': {
    component: Main
  },
  '/rank': {
    component: Rank
  },
  '/apply': {
    component: Apply
  },
  '/tips': {
    component: Tips
  }
})
router.start(App, 'body')
