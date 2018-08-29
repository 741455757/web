import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 2.1导入vue-resource 
import VueResource from 'vue-resource'
// 2.2安装vue-resource 
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.option.root='https://api.douban.com';

// 导入格式化时间插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dataFormat', function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern);
})

// 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入mint-ui组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
// import 'mint-ui/lib/Header/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.3导入自己的router.js漏油模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:function(createElements){//renter 会把el指定的容器中，所有都清空覆盖，所有不要把路由router-view和router-link直接写到el所控制的元素中
        return createElements(app)
    },
    router//1.4挂载路由对象到VM实例上
})