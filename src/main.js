import Vue from 'vue'
require('./extends/filters')
require('./extends/directives')
import router from './router/routers.js'
import App from './App.vue'
require('assets/css/comm.less')

// 实例全局事件管理器
window.eventBus = new Vue()

//重写window.alert
window.alert = function (title, callback) {
  window.eventBus.$emit('alert.show', title, callback)
}
//重写window.confirm
window.confirm = function (title, callback) {
  window.eventBus.$emit('confirm.show', title, callback)
}

import store from './store'
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  }
})
