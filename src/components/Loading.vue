<template>
    <div class="css3-center bq-loading" v-show='show'>
        {{msg||'正在加载.....'}}
    </div>
</template>
<style>
.bq-loading{
z-index: 10000;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    color: #fff;
    background-color: rgba(0,0,0,.3);
}
</style>
<script>
    export default{
        data(){
            return{
                msg:'',
                show:false
            }
        },
        created:function(){
            var _self = this
            window.eventBus.$on('loading.show',function(msg){
                _self.msg = msg
                _self.show = true
            })
            window.eventBus.$on('loading.hide',function(){
                _self.show = false
            })
        }
    }

</script>
