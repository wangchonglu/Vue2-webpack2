/**
 * Created by chonglu.wang on 2017/2/14.
 */
/**
 * 服务器访问基础接口封装
 */
import Config from '../config/index'
import $ from 'zepto-webpack'
export default {
    ajax: function (data) {
        var options = {
            type: 'POST',
            cache: false,
            memory: false,
            ignoreCode: false,
            beforeSend: function (req) {
            },
            dataType: 'json',
            contentType: 'application/json'
        }
        data.data = data.data || {}
        Object.assign(options, data)
        options.url = Config.host + data.action

        options.success = function (v, textStatus, jqXHR) {
            if (typeof data.success === 'function') {
                data.success(v)
            }
        }
        window.eventBus.$emit('loading.show') // 弹出loading框
        options.complete = function (XMLHttpRequest, textStatus) {
            window.eventBus.$emit('loading.hide')// 隐藏loading框
        }
        options.error = function (xhr, exception) {
            if (xhr.status === '400') {
                window.alert('参数格式不正确')
            } else if (xhr.status === '401') {
                window.alert('用户授权过期。请重新登陆')
            } else {
                switch (xhr.status) {
                    case 404:
                        window.alert('请求地址不存在')
                        break
                    case 500:
                        window.alert('服务器内部错误')
                        break
                    case 502:
                        window.alert('网关错误')
                        break
                    default:
                        switch (exception) {
                            case 'parsererror':
                                window.alert('数据解析错误')
                                break
                            case 'timeout':
                                window.alert('请求超时')
                                break
                            case 'abort':
                                window.alert('连接被终止')
                                break
                            default:
                                window.alert('请求失败')
                        }
                }
            }
            if (typeof data.error === 'function') {
                data.error()
            }
        }
        $.ajax(options)
    }
}
