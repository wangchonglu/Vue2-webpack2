<template>
    <x-dialog v-model="show" class="dialog-three">
        <div>
            弹出框 窗体3
            <br> <br>
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

        }
    }
</script>

<style lang="less">
    .dialog-three {

    }
</style>
