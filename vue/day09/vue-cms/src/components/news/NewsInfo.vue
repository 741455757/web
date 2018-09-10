<template>
    <div class="newsInfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content">
            <img :src="newsInfo.images.small" alt="">
            <div v-html="newsInfo.summary"></div>
        </div>
        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
        <!-- <h1> 新闻详情页--{{id}}</h1> -->
    </div>
</template>
<script>
import comment from '../../components/subcomponents/comment.vue'
    export default {
        data(){
            return {
                id: this.$route.params.id,//将URL地址传递过来的Id值，挂载到data上，方便后调用
                newsInfo:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.jsonp("https://api.douban.com/v2/movie/subject/"+this.id).then(res=>{
                    //  console.log(res.body);
                    this.newsInfo = res.body;
                })
            }
        },
        components:{
            "comment-box":comment
        }
    }
</script>
<style lang="scss" scoped>
    .newsInfo-container{
        padding:0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width:100%
            }
        }
    }
</style>