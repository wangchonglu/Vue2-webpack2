<template>
    <x-dialog  v-model="show" class="dialog-one">
        <div>
            弹出框 窗体1
            <br> <br>
            <button @click='callEvent'>调用传递过来的ok函數</button>
            <button @click='close'>关闭</button>
            <br>
            <br>
        </div>
    </x-dialog>
</template>

<script>
    import BaseDialog from 'src/base/BaseDialog'
    import { XDialog } from 'vux'
    export default {
        mixins: [BaseDialog],
        components: {
            XDialog
        },
        data () {
            return {

            }
        },
        methods:{
            callEvent:function(){
                this.ok()
            }
        }
    }
</script>

<style lang="less">
    .dialog-one {

    }
</style>
