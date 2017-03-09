/**
 * Created by chonglu.wang on 2017/3/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

//import all modules
import user from './modules/user'

Vue.use(Vuex)

//全局state
let state = {
  //主题列表
  themeList: {
    'blue': { name: '蓝色天堂', class: 'blue-skin' },
    'violet': { name: '紫色贵族', class: 'violet-skin' },
    'red': { name: '红色火焰', class: 'red-skin' }
  }

}
export default new Vuex.Store({
  state: state,
  actions,
  getters,
  mutations,
  modules: {
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})