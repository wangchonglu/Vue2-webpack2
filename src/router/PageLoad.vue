<template>
    <component :is="currPage"></component>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue'
    import noPage from '../views/404'
    export default {
        name: 'PageRouter',
        data: function () {
            return {
                currPage: ''
            }
        },
        components: {'404': noPage},
        mounted: function () {
            this.loadPage(this.$route.params)
        },
        watch: {
            '$route' (to, from) {
                //debugger
                if (to.params.page != from.params.page) {
                    // 如果页面改变。load新页面加入
                    this.loadPage(to.params)
                }
            }
        },
        methods: {
            loadPage: function (data) {
                var name = data.page || 'home'
                System.import('../views/' + name + '').then(module => {
                    if (name != module.name) {
                        console.warn('页面名称和路径名称不同,请修改' + path + '.vue 文件中的name:' + module.name + ' 为 ' + 'name:' + name)
                    }
                    Vue.component(name, module)
                    this.currPage = name
                }).catch(() => {
                    this.currPage = '404'
                })
            }
        }
    }
</script>
