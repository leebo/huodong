var Vue = require('vue')
var App = require('./app.vue')
var Menu = require('./components/menu.vue')
var Zepto = require('../node_modules/zepto/zepto.min.js')
require('./assets/js/sm.js')
require('vue-resource')
var Huodong = require('./components/huodong.vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
var App = Vue.extend({
  components: {
    menu: Menu
  }
})

router.map({
  '/huodong': {
    component: Huodong
  }
})
router.start(App, 'body')
