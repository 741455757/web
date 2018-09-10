<template>
    <div class="cmt-container">
       <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" placeholder="请输入要吐槽的内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="getMore"> 发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.userinfo.nick}}&nbsp;&nbsp;发表时间：{{item.time|timeFormat}}
                </div>
                <div class="cmt-body">
                   {{item.content}}
                </div>
            </div>
        </div>
        <!-- <mt-button type="danger" size="large" plain @click.prevent="getMore">加载更多</mt-button> -->
         <mt-button type="danger" size="large" plain v-on:click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                comments:[],
                pageindex:10//默认展示第一页数据
            }
        },
        created(){
            this.getcomments();
        },
        methods:{
            // 获取轮播图数据的方法
            getcomments(){
                this.$http.jsonp("https://coral.qq.com/article/3038337827/hotcomment?source=10&commentid=0&reqnum="+this.pageindex+"&callback=__jp0").then(res=>{
                    // console.log(res.body);
                    // 每当获取新评论的数据的时候，不要把老数据清空覆盖，而是应该用老数据，拼接上新数据
                   this.comments=res.body.data.commentid;
                })
            },
            getMore(){
              this.pageindex = this.pageindex+10;
               this.getcomments();
            }
        },
        props:["id"],
        filters:{
           "timeFormat":function(time){
               Date.prototype.Format = function(fmt) {
                var o = {
                    "M+" : this.getMonth()+1, //月份
                    "d+" : this.getDate(), //日
                    "h+" : this.getHours(), //小时
                    "m+" : this.getMinutes(), //分
                    "s+" : this.getSeconds(), //秒
                    "q+" : Math.floor((this.getMonth()+3)/3), //季度
                    "S" : this.getMilliseconds() //毫秒
                };
                if(/(y+)/.test(fmt))
                    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
                    for(var k in o)
                        if(new RegExp("("+ k +")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                    return fmt;
                }
                return new Date(time).Format("yyyy-MM-dd hh:mm:ss");
           } 
        }
    }
</script>
<style lang="scss" scoped>
     .cmt-container{
         h3{
             font-size:16px;
         }
         textarea{
             font-size: 14px;
             height: 85px;
             margin: 0;
         }
         .cmt-list{
             margin: 10px 0;
             .cmt-item{
                 font-size: 13px;
                 .cmt-title{
                     line-height:30px;
                     background-color: #ccc;
                 }
             }
             .cmt-body{
                 line-height: 30px;
                 text-align: 2em;
             }
         }
     }
</style>

