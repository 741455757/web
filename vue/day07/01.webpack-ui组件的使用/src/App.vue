<template>
    <div>
        <h1>这是App 组件</h1>
        <!-- 为什么这里叫做 mt-button的button直接就能使用 -->
        <mt-button type="default" icon="back" @click='show'>default</mt-button>
        <mt-button type="danger" size="small" disabled icon="more">default</mt-button>
        <mt-button type="danger" size="large">default</mt-button>
        <mt-button type="danger" size="large" plain>default</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button> 
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
    </div>

</template>
<script>
    // 按需导入Toast组件
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                toastInstance: null
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                // 模拟获取列表的一个 Ajax方法
                // 在获取数据之前，立即弹出Toast提示用户，正在加载数据
                this.show();
                console.log()
                setTimeout(()=>{
                    // 3秒过后把toast移除
                    this.toastInstance.close()
                },3000)
            },
            show(){
                // Toast('提示信息');
               this.toastInstance= Toast({
                    message: '提示',
                    duration: -1,//如果是-1，则弹出后不消失
                    position: 'top',
                    iconClass: 'glyphicon glyphicon-ok',//设置图标类
                    className: 'myToast'//自定义Toast的样式，需要自己提供一个类名
                });
            }
        }
    }
</script>
<style>
    
</style>
