<template>
    <div>
        <component v-for="name in dialogs" :is="name"></component>
    </div>
</template>
<style scoped lang="less">

</style>
<script>
    import Vue from 'vue'
    import BasePage from 'src/base/BaseDialog'
    export default{
            data(){
                return{
                dialogs:[]
                }
            },
            created:function(){
                var _self = this
                window.eventBus.$on('dialog.open',function(params){
                   _self.getDialog(params)
                })
                window.eventBus.$on('dialog.close',function(url){
                   url = url.replace(/\//g,'_')
                   for(let i in _self.dialogs){
                        if(_self.dialogs[i]==url){
                            _self.dialogs.splice(i,1)
                            break
                        }
                   }
                })
            },
            methods:{
                getDialog:function(params){
                      var _self = this
                      System.import('../views/' + params.url + '').then(module => {
                          var dialog = Vue.extend(module)
                          var newName = params.url.replace(/\//g,'_')
                          dialog = dialog.extend({
                            data: function () {
                              return params.data||{}
                            },
                            name:newName,
                            methods: params.events||{}
                          })
                          Vue.component(newName, dialog)
                          _self.dialogs.push(newName)
                    }).catch((error) => {
                       window.alert('加载模态窗口失败')
                       window.console.warn('加载模态窗口失败',params,error)
                    })

            }
        }
    }




</script>
