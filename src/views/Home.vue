<template>
  <div class="home">
    <div class="content-block">
      <!-- 销售管理 -->
      <div class="block-header nav">
        <router-link to="/Client">
          <i class="icon-1"></i>
          <span>客户</span>
        </router-link>

        <router-link to="/Contact">
          <i class="icon-2"></i>
          <span>联系人</span>
        </router-link>
      </div>

      Demo:
      <div class="block-content nav">
        <a @click='openAlert'><span>alert</span></a>
        <a @click='openConfirm'><span>confirm</span></a>
        <a @click='newDialog'><span>模态窗口</span></a>
      </div>

      <div class="block-content nav">
        <a @click='openLoading'><span>显示Loading</span></a>
        <a @click='sendAjax'><span>Ajax请求</span></a>
        <a><span></span></a>
      </div>

      过滤器使用
      原值：{{testDate}}<br>
      过滤后1：{{testDate | datetime}}<br>
      过滤后2：{{testDate | datetime('yyyy-MM-dd')}}

      <br><br>VUEX调用<br>
      {{theamList}}
      <div class="block-content nav">
        <a><span></span></a>
        <a><span></span></a>
        <a><span></span></a>
      </div>

      <div class="block-content nav">
        <a><span></span></a>
        <a><span></span></a>
        <a><span></span></a>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import BasePage from 'src/base/BasePage'
  import Flexbox from 'vux-components/flexbox/flexbox'
  import FlexboxItem from 'vux-components/flexbox/flexbox-item'
  import userApi from '../api/user'
  export default {
    mixins: [ BasePage ],
    name: 'Client',
    title: 'CRM App',
    data () {
      return {
        testDate: 1488799184980
      }
    },
    mounted: function () {

    },
    computed: {
      ...mapGetters({ theamList: 'getTheamList' })
    },
    methods: {
      openAlert: function () {
        //window.alert('操作成功')
        window.alert('操作成功', function () {
          console.log('ok')
        })
      },
      openConfirm: function () {
        //window.confirm('是否刪除？')
        window.confirm('是否刪除？', function () {
          window.alert('操作成功')
        })
      },
      newDialog: function () {
        this.openDialog({
          url: 'dialogs/d1',
          data: {},//參數
          events: { //自定義事件
            ok: function () {
              window.alert('調用ok成功')
            }
          }
        })
      },
      openLoading: function () {
        window.eventBus.$emit('loading.show') // 弹出loading框
        window.setTimeout(function () {
          window.eventBus.$emit('loading.hide')// 隐藏loading框
        }, 3000)
      },
      sendAjax: function () {
        userApi.getUserInfo(1)
      }
    }
  }


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../assets/css/icon.less';

  .home {
    width: 100%;
    height: 100%;
    background: #1979A6;

  .content-block {
    color: darkslateblue;
    padding: 0 0.5rem;

  .nav {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    margin-bottom: 0.75rem;
    background: #d4eaf5;

  .none {
    border-right: none;
  }

  a {
    flex: 0 0 33%;
    height: 6rem;
    text-align: center;
    line-height: 6rem;
    border-bottom: 1px solid #9db5f3;
    border-right: 1px solid #9db5f3;
    position: relative;

  i {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 23%;
    left: 37%;
  }

  span {
    display: block;
    text-align: center;
    margin-top: 22px;
    font-size: 14px;
  }

  }
  }
  }
  }
</style>
