<template>
    <div class="bp-alert css3-center" v-show='show'>
        <div class="bq-msg css3-center">
            {{msg || '恭喜你,保存成功!' }}
        </div>
        <div class="bq-ok" @click="hideAlert"> 确定</div>
    </div>
</template>
<style scoped lang="less">
    .bp-alert {
        position: absolute;
        z-index: 10000;
        height: 150px;
        width: 70%;
        top: 40%;
        left: 20%;
        border-radius: 3px;
        color: #444;
        background-color: white;
    }

    .bq-msg {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 110px;
    }

    .bq-ok {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        border-top: .5px rgba(153, 153, 153, 0.14) solid;
        color: rgb(16, 174, 255);
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'',
                show:false,
                callback:undefined
            }
        },
        created:function () {
            var _self = this
            window.eventBus.$on('alert.show',function(msg,callback){
                _self.msg = msg
                _self.callback = callback
                _self.show = true
            })
            window.eventBus.$on('alert.hide',function(){
                _self.show = false
            })
        },
        methods: {
            hideAlert: function () {
                this.show = false
                if(typeof(this.callback)=='function'){
                    this.callback()
                }
            }
        }
    }






</script>
