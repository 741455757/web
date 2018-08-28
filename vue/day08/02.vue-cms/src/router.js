

import VueRouter from 'vue-router'

// 导入对应的路由组件

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
// 3.创建漏由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/home/newsList',component:NewsList},
    ],
     linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
// 把漏油对象暴露出去‘
 export default router