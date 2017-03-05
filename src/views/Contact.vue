<template>
    <div class="contact">
        <div v-for="item in items" class="block">
            <router-link to="/ContactDetail">
                <div class="all">
                    <div class="image">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                        <div class="vux-1px-b line">
                            <div><span class="place">{{item.name}}</span><span class="normal">{{item.position}}</span>
                            </div>
                        </div>
                        <div class="vux-1px-b line">
                            <div><span class="place">tel:</span><span>{{item.tel}}</span></div>
                        </div>
                        <div class="line">
                            <div><span class="place">company:</span><span>{{item.company}}</span></div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import BasePage from 'src/base/BasePage'
    export default {
        mixins: [BasePage],
        name: 'Contact',
        title:'联系人',
        props: [ ],
        components: {

        },
        data () {
            return {
                items: [
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' },
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' },
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' },
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' },
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' },
                     { name: '王三', position: '销售主管', tel: '13122324444', company: '埃林哲' }
                ]
            }
        }
    }

</script>
<style lang="less">
    @import '~vux/src/styles/1px.less';

    .contact {
        padding-bottom: 5px;
        font-size: 12px;
        background: rgb(238, 238, 238);
        height: 100%;
        .block {
            margin: 5px 10px;
            background: #fff;
            &:first-child {
                margin-top: 0;
            }
            &:last-child {
                margin-bottom: 0;
            }
            .all {
                .image {
                    margin: 5px;
                    width: 20%;
                    height: 80px;
                    float: left;
                    text-align: center;
                    align-content: center;
                    align-self: center;
                    vertical-align: center;
                }
                .content {
                    margin-left: 22%;
                    padding: 0px 5px;
                    width: 70%;
                    height: 90px;
                    display: table;
                    .line {
                        display: row;
                        padding: 0 5px;
                        height: 30px;
                        line-height: 30px;
                        width: 100%;
                        &:first-child {
                            font-size: 14px;
                            color: rgb(151, 151, 151);
                        }
                        .normal {
                            font-size: 12px;
                        }
                        .place {
                            color: rgb(151, 151, 151);
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }

</style>
