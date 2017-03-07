/**
 * 所有页面基础类
 */
export default {
    props: ['params'],
    replace: true,
    title: '',
    vue: null,
    data: function () {
        return {}
    },
    mounted: function () {
        this.$options.initPageTitle()
    },
    destroyed: function () {

    },
    initPageTitle: function () {
        var me = this
        document.title = me.title
    },
    methods: {

        /**
         * 添加window.openDialog
         * 参数如下形式
         {
            url: '模块地址',
            data: { info:{},user:'' } //参数,
            events:{ok:function(){} , cancel:function(){} } //事件
          }
         */
        openDialog: function (params) {
            window.eventBus.$emit('dialog.open', params)
        }
    }
}
