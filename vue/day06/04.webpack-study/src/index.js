import Vue from 'vue'

// 1.导入vue-router包
import VueRouter from 'vue-router'

// 2.手动安装VueRouter
Vue.use(VueRouter)

// 导入app组件
import app from './App.vue'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 3.创建漏由对象
var router = new VueRouter({
    routes:[
        //account goodslist
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
})
var vm = new Vue({
    el:"#app",
    render:function(createElements){//renter 会把el指定的容器中，所有都清空覆盖，所有不要把路由router-view和router-link直接写到el所控制的元素中
        return createElements(app)
    },
    router //4.将路由对象挂载到vm上
})

// 注意：APP这个组件，是通过VM实例的render函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到el：#app 所指定的元素中；
// Acoount和GoodsList组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到属于路由 <router-view></router-view>中去