/**
 * Created by chonglu.wang on 2017/3/7.
 */

import Http from '../toolBus/Http'
export default {
  login (name, pwd) {

  },
  getUserInfo (uid) {
    Http.ajax({
      action: 'services/get1',
      success: function (data) {
        //todo
      },
      error: function () {
        //todo
      }
    })
  }
}