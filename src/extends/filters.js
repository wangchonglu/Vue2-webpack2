import Vue from 'vue'
import DateTool from '../toolBus/Date'
//时间格式化
Vue.filter('datetime', function (value, format) {
  return DateTool.format(value, (format || 'yyyy-MM-dd hh:mm'))
})