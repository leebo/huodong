var Vue = require('vue')
var App = require('./app.vue')
var Zepto = require('../node_modules/zepto/zepto.min.js')
require('./assets/js/sm.js')

new Vue({
  el: 'body',
  components: {
    app: App
  }
})
