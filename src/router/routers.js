import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import PageLoad from './PageLoad.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/:page/:data',
    component: PageLoad
  }, {
    path: '/:page',
    component: PageLoad
  }, {
    path: '/',
    component: Home
  } ]
})
