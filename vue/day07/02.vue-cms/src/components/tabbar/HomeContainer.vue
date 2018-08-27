<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->

            <mt-swipe-item v-for="item in lunbolist" :key="item.images.medium">
                <img :src="item.images.medium" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格到6宫格的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
        <!-- <h1> HomeContainer</h1> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lunbolist:[]
            }
        },
        created(){
            this.getlunbotu();
        },
        methods:{
            // 获取轮播图数据的方法
            getlunbotu(){
                this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters",{params:{count:3}}).then(res=>{
                    console.log(res.body.subjects);
                    this.lunbolist = res.body.subjects;
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;   
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
             &:nth-child(2){
                background-color: blue;
            }
             &:nth-child(3){
                background-color: cyan;
            }
            img{
                width:100%;
                height:100%
            } 
        }
       
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px
    }
</style>
