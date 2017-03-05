<template>
    <div class=app-header>
        <div class="header-nav">
            <!--<a href="javascript:history.go(-1)" class="crm-back"><span></span></a>-->
            <span class="header-hou"></span>
            <span class="header-search">
                    <i></i>
                    <input type="search" class="search" name="fname" @click="toSearch" placeholder="搜索">
                </span>
            <em class="my-class"></em>
            <a href="#" class="add" style="display:none">
                <span></span>
            </a>
            <a href="#" class="hpuse">
                <span></span>
            </a>
        </div>
    </div>
</template>
<style scoped lang="less">
    .app-header {
        .header-nav {
            position: fixed;
            top: 0;
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: #147CBA;
            z-index: 1000;
            /*<!-- 返回按钮 -->*/
            .crm-back {
                display: block;
                position: absolute;
                left: 6px;
                top: 6px;
                text-align: center;
                span {
                    display: block;
                    width: 15px;
                    height: 15px;
                    border-top: 2px solid #ffffff;
                    border-left: 2px solid #ffffff;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    margin: 10px;
                }
            }
            //点击显示侧栏
            .header-hou {
                display: inline-block;
                width: 25px;
                height: 25px;
                background: url(../assets/images/icon-people.png) no-repeat;
                background-size: cover;
                position: absolute;
                top: 14px;
                left: 17px;

            }

            //搜索图标
            .header-search {
                i {
                    /*display: inline-block;*/
                    /*width: 15px;*/
                    /*height: 15px;*/
                    /*background: no-repeat url(../assets/images/search.png);*/
                    /*background-size: 15px 15px;*/
                }
                //搜索框样式
                input {
                    width: 54%;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 16%;
                    outline: none;
                    border-radius: 50px;
                    -webkit-border-radius: 50px;
                    text-indent: 10px;
                    background: #135994;
                    opacity: 0.7;
                    text-shadow: none;
                    -webkit-appearance: none;
                }
                input::-webkit-input-placeholder {
                    text-align: center;
                    color: red;
                }
            }
            //时间图标
            em {
                display: block;
                width: 28px;
                height: 28px;
                background: url(../assets/images/icon-time.png) no-repeat;
                background-size: 28px 28px;
                position: absolute;
                top: 13px;
                right: 18%;
            }
            //图标
            .hpuse {
                display: block;
                position: absolute;
                right: 10px;
                top: 0;
                text-align: center;
                span {
                    width: 28px;
                    height: 28px;
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    background: url(../assets/images/icon-house.png) no-repeat;
                    background-size: 28px 28px;
                    cursor: pointer;
                }
            }

            /*<!-- 新增按钮 -->*/
            .add {
                display: block;
                position: absolute;
                right: 10px;
                top: 0;
                text-align: center;
                span {
                    width: 28px;
                    height: 28px;
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: middle;
                    background: url(../assets/images/icon-add.png) no-repeat;
                    background-size: 28px 28px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
          toSearch: function () {
              this.$router.push('Search')
          }
        }
    }
</script>
