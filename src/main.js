import Vue from 'vue'
require('./extends/filters')
require('./extends/directives')
import router from './router/routers.js'
import App from './App.vue'
require('assets/css/comm.less')

// 实例全局事件管理器
window.EM = new Vue()

//重写window.alert
window.alert = function (title, callback) {
    window.EM.$emit('alert.show', title, callback)
}
//重写window.confirm
window.confirm = function (title, callback) {
    window.EM.$emit('confirm.show', title, callback)
}

new Vue({
    el: '#app',
    router,
    components: {
        App
    }
})
