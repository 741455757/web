<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/' +item.id">
						<img class="mui-media-object mui-pull-left" :src="item.images.small">
						<div class="mui-media-body">
                            <h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.year|dataFormat}}</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
        <!-- <h1> 新闻列表</h1> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                // 获取新闻列表
                this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters",{params:{count:20}}).then(res=>{
                    //  console.log(res.body.subjects);
                    this.newsList = res.body.subjects;
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size:14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>