<template>
  <div class="client">
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="item in list" @click="demo2 = item">
        {{item}}
      </tab-item>
    </tab>
    <div v-for="item in items" class="block">
      <router-link to="/ClientDetail">
        <fieldset class="vux-1px-t line">
        </fieldset>
        <flexbox class="vux-1px-t per">
          <flexbox-item class="">
            <div>{{item.name}}</div>
          </flexbox-item>
          <flexbox-item class="right">
            <div>ID: {{item.code}}</div>
          </flexbox-item>
        </flexbox>
        <flexbox class="per">
          <flexbox-item class="">
            <div><span class="place">授信额度: </span><span>{{item.mount}}</span></div>
          </flexbox-item>
        </flexbox>
        <flexbox class="vux-1px-b per">
          <flexbox-item class="">
            <div><span class="place">销售经理: </span><span class="saler">{{item.saler}}</span></div>
          </flexbox-item>
          <flexbox-item class="right">
            <div><span class="place">销售大区: </span><span>{{item.area}}</span></div>
          </flexbox-item>
        </flexbox>
      </router-link>
    </div>
  </div>
</template>

<script>
  import BasePage from 'src/base/BasePage'
  import Http from '../toolBus/Http'
  import {
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
  } from 'vux'

  export default {
    mixins: [ BasePage ],
    name: 'Client',
    title: '客戶',
    props: [],
    components: {
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        items: [
          { name: '丰达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '韵达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '达达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '美年达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '郭达斯坦斯', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '大达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '杰达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' },
          { name: '我达', code: '2006', mount: '22222', retain: '222', area: '华东大区', saler: 'Alice' }
        ],
        list: [ '潜在客户', '已签客户', '已下单', '全部客户' ],
        demo2: '潜在客户'
      }
    },
    mounted: function () {
      //Http.ajax({
      //action:'service/api/test',
      //success:function(){

      //}
      //})
    },
    methods: {

    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';

  .client {
    font-size: 12px;
    background: rgb(238, 238, 238);
    height: 100%;

  .block {
    padding-top: 5px;
    margin: 5px 10px;
    background: #fff;

  &
  :first-child {
    margin-top: 0;
  }

  &
  :last-child {
    margin-bottom: 0;
  }

  .line {
    border-top: 3px solid rgb(126, 206, 244);
  }

  .per {
    height: 30px;
    margin: 0 auto;
    padding: 0 5px;
    width: auto;

  &
  :first-child {
    height: 50px;
    font-size: 14px;
  }

  .right {
    text-align: right;
    color: rgb(151, 151, 151);
  }

  .place {
    color: rgb(151, 151, 151);
    margin-right: 10px;
  }

  .saler {
    color: rgb(151, 151, 151);
  }

  }
  }
  }

  .vux-tab {
    background: #147CBA;
  }

  .vux-tab .vux-tab-item {
    color: #fff;
  }
</style>
