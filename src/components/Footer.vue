<template>
    <div>
        <div class="app-footer">

            <div class="footer-nav-item">
                <a class="">
                    <img slot="icon" src="../assets/images/icon-g.png">
                    <span>工作</span>
                </a>
            </div>
            <div class="footer-nav-item">
                <a class="radius" @click="triggerNew">
                    <div class="center">
                        <div class="top"></div>
                        <div class="right"></div>
                    </div>
                </a>
            </div>
            <div class="footer-nav-item">
                <a class="" href="/#/Backlog">
                    <img slot="icon" src="../assets/images/icon-d.png">
                    <span>待办</span>
                </a>
            </div>
        </div>
        <!-- 新增 -->
        <popup v-model="show">
            <div class="popup">
                <div class="group">
                    <div class="top">
                        <div class="num_1">
                            <a>
                                <div class="item">
                                    <span>新建线索</span>
                                </div>
                            </a>
                        </div>
                        <div class="num_2">
                            <a>
                                <div class="item">
                                    <span>新建商机</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="num_0">
                            <a>
                                <div class="item">
                                    <span>新建联系人</span>
                                </div>
                            </a>
                        </div>
                        <div class="delete">
                            <a @click="triggerNew"></a>
                        </div>
                        <div class="num_3">
                            <a>
                                <div class="item">
                                    <span>新建巡检</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </popup>
    </div>
</template>
<style scoped lang="less">
    .app-footer {
        width: 100%;
        margin: auto;
        height: 60px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: -webkit-box;
        display: box;
        padding: 0 5px;
        background: #147CBA;
        .footer-nav-item {
            -webkit-box-flex: 1;
            text-align: center;
            a {
                display: inline-block;
                background: #147CBA;
                text-align: center;
                img {
                    display: block;
                    width: 25px;
                    height: 25px;
                    margin: 9px 0 0 2px;
                }
                span {
                    font-size: 14px;
                    color: #ffffff;
                    display: block;
                }
            }
            .radius {
                display: inline-block;
                width: 45px;
                height: 45px;
                border-radius: 50%;
                -webkit-border-radius: 50%;
                background: #ffffff;
                margin-top: 7px;
                .center {
                    margin-left: 8PX;
                    margin-top: 21px;
                    .top {
                        width: 30px;
                        height: 2px;
                        background: #147CBA;
                        transform: rotate(-90deg);
                        -webkit-transform: rotate(-90deg);
                    }
                    .right {
                        height: 2px;
                        width: 30px;
                        background: #147CBA;
                    }
                }
            }
        }
    }
    /*新增*/
    .vux-popup-dialog {
        background: none;
    }
    .popup {
        height: 200px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50% 50% 0 0;
        overflow: hidden;
        .group {
            height: 200px;
            width: 100%;
            margin: 0 auto;
            background: #005ABF;
            color: #c7c7c7;
            border-radius: 50% 50% 0 0;
            overflow: hidden;
            .top {
                height: 100px;
                width: 50%;
                margin-left: 25%;
                /*background: #ff0000;*/
                .num_1 {
                    /*background: #fff;*/
                    width: 50%;
                    height: 100%;
                    float: left;
                }
                .num_2 {
                    /*background: #fff;*/
                    width: 50%;
                    height: 100%;
                    margin-left: 50%;
                }
            }
            .bottom {
                height: 100px;
                width: 100%;
                /*background: rgba(0,0,1,0.5);*/
                .num_0 {
                    width: 25%;
                    height: 100%;
                    /*background: #000;*/
                    float: left;
                }
                .delete {
                    float: left;
                    width: 20%;
                    margin-left: 15%;
                    /*background: #0f0;*/
                    height: 100px;
                    text-align: center;
                    line-height: 100px;
                    a {
                        display: inline-block;
                        width: 20px;
                        height: 5px;
                        background: #fff;
                        line-height: 0;
                        font-size: 0;
                        vertical-align: middle;
                        -webkit-transform: rotate(45deg);
                    }
                    a:after {
                        content: '/';
                        display: block;
                        width: 20px;
                        height: 5px;
                        background: #fff;
                        -webkit-transform: rotate(-90deg);
                    }
                }
                .num_3 {
                    width: 25%;
                    height: 100%;
                    margin-left: 75%;
                    /*background: #00f;*/
                }
            }
            .item {
                text-align: center;
                line-height: 100px;
                span {
                    color: #fff;
                }
            }
        }
    }
</style>
<script>
    import { Popup } from 'vux'
    export default{
        data(){
            return{
                show:false,
            }
        },
        components: {
          Popup
        },
        created:function () {

        },
        methods: {
          triggerNew: function (e) {
            this.show = !this.show
          },
        }
    }

</script>
