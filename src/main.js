var Vue = require('vue')
var Main = require('./main.vue')
var Rank = require('./components/rank.vue')
var Tips = require('./components/tips.vue')
var Apply = require('./components/apply.vue')
var Menu = require('./components/shared/menu.vue')
var Titleheader = require('./components/shared/titleheader.vue')
var Zepto = require('../node_modules/zepto/zepto.min.js')
require('./assets/js/sm.js')
require('vue-resource')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
var App = Vue.extend({
  data () {
    return {
      title: "home"
    }
  },
  components: {
    menu: Menu,
    titleheader: Titleheader
  }
})

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
