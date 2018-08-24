import Vue from 'vue'

// 1.导入vue-router包
import VueRouter from 'vue-router'

// 2.手动安装VueRouter
Vue.use(VueRouter)

// 导入boostrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入MUI的样式表，和Bootstrap用法没有差别
import './lib/mui/css/mui.css'

// 导入Mint-UI
import MintUI from 'mint-ui'//把所有的组件都导入进来
// 这里可以省略node——modules这层目录
import 'mint-ui/lib/style.css'
// 将mint-ui安装到Vue中
Vue.use(MintUI)//把所有的组件注册为全局的组件

// 导入app组件
import app from './App.vue'
import router from './router.js'

var vm = new Vue({
    el:"#app",
    render:function(createElements){//renter 会把el指定的容器中，所有都清空覆盖，所有不要把路由router-view和router-link直接写到el所控制的元素中
        return createElements(app)
    },
    router //4.将路由对象挂载到vm上
})

// 注意：APP这个组件，是通过VM实例的render函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到el：#app 所指定的元素中；
// Acoount和GoodsList组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到属于路由 <router-view></router-view>中去