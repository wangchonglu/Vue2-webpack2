<template>
  <x-dialog v-model="show" class="dialog-three">
    <div>
      暂未实现 <br><br>
      TODO:显示日志
    </div>
  </x-dialog>
</template>

<style lang="less">
  .dialog-log {

  }
</style>

<script>
  import BaseComponent from '../base/BaseComponent'
  import {XDialog} from 'vux'
  export default {
    mixins: [ BaseComponent ],
    components: {
      XDialog
    },
    data () {
      return {
        show: false,
        logs: []
      }
    },
    methods: {}
  }
</script>


