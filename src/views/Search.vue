<template>
    <!-- 搜索 -->

    <div id="gx-search">
        <div class="header">

            <a href="javascript:history.go(-1)" class="crm-back" @click="back"><span></span></a>

            <i class="icon-search"></i>

            <input type="search" name="search" id="search" placeholder="请输入">

            <span class="cancal" @click="close">取消</span>
        </div>

        <nav class="con">
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>
            <div class="con-search">
                <div class="serch-list">
                    <p>上海埃林哲管理咨询有限公司</p>
                </div>
            </div>

        </nav>
    </div>

</template>

<script>
    import BasePage from 'src/base/BasePage'
    import $ from 'zepto-webpack'
    export default {
        mixins: [BasePage],
        name: 'Search',
        title: '搜索',
        methods: {
            back: function () {
                $('#search').attr('val','')
            },
            close: function () {
                $('#search').val('')
            }
        }
}

</script>

<style scoped lang="less">
    #gx-search {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;
        background: #fff;
        .header {
            width: 100%;
            line-height: 50px;
            background: #147CBA;
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

            .icon-search {
                position: absolute;
                top: 17px;
                left: 16%;
                width: 20px;
                height: 20px;
                background: url(../assets/images/search.png) no-repeat;
                background-size: 100%;
            }

            #search {
                width: 70%;
                height: 40px;
                margin-left: 12%;
                outline: none;
                border-radius: 50px;
                -webkit-border-radius: 50px;
                text-indent: 40px;
                text-shadow: none;
                -webkit-appearance: none;
                background: #ffffff;
                font-size: 14px;
            }
            .cancal {
                margin-left: 10px;
            }
        }
        .con {
            margin-top: 0 !important;
            overflow-y: auto;
            font-size: 16px;
            color: #000;
            position: relative;
            .con-search {
                padding: 10px 24px;
                position: relative;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                ::after {
                    content: " ";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    border-bottom: 1px solid #D9D9D9;
                    color: #D9D9D9;
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                    left: 24px;
                }
                .search-list {
                    -webkit-box-flex: 1;
                    -webkit-flex: 1;
                    flex: 1;
                }
            }
        }
    }

</style>

