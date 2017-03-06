<template>
    <div class="app">
        <!-- header -->
        <bq-header></bq-header>

        <!-- contant -->
        <div class="app-body">
            <router-view keep-alive transition transition-mode="out-in">
            </router-view>
        </div>

        <!-- footer -->
        <bq-footer></bq-footer>

        <!-- 加载loading -->
        <loading></loading>

        <!-- alert 弹窗 -->
        <alert></alert>

        <!-- confirm 弹窗 -->
        <confirm></confirm>

        <!-- 模态窗体 -->
        <dialogs></dialogs>

        <!-- 日志模块 -->
        <log></log>
    </div>
</template>
<script>
  import Tabbar from 'vux'
  import tabbarItem from 'vux'
  import BqFooter from './components/Footer.vue'
  import BqHeader from './components/Header.vue'
  import Loading from './components/Loading.vue'
  import Alert from './components/Alert.vue'
  import Confirm from './components/Confirm.vue'
  import Dialogs from './components/Dialogs.vue'
  import Log from './components/Log.vue'
  export default {
      name: 'App',
      props: [ ],
      components: {
          Tabbar, tabbarItem, Loading, Alert, Confirm, Dialogs, Log, BqFooter, BqHeader
      },
      data () {
          return {

          }
      },
      methods: {
      }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .app-body {
        margin-top: 50px;
        margin-bottom: 50px;
        z-index: 999;
        a {
            text-decoration: none
        }
    }
</style>
