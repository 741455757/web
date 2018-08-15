// 复习在 普通网页中图和使用vue：
// 1.使用script标签，引入vue的包
// 2.在index页面中创建一个id为app div容器
// 3.通过new Vue得到一个vm的实例

// 在webpack中尝试使用Vue
// 注意：在webpack中，使用 import Vue from 'vue'导入Vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式；

import Vue from 'vue'
// 回顾包的查找规则：
// 1.找项目根目录中有没有node_modules的文件夹
// 2.在node_modules中根据包名，找到对应的vue文件夹
// 3.在vue文件夹中，找到一个叫做package。json的包配置文件
// 4.在package。json文件中，查找一个main属性【main属性指定了整个包在被加载时候，的入口】

// import Vue from '../node_modules/vue/dist/vue.js'

// var login={
//     template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }
// 1.导入login组件
import login from './login.vue'
// 默认 webpack无法打包.vue文件，需要安装相关的loader
// cnpm i vue-loader vue-template-compiler -S
// 在配置文件中，新增loader配置项 {test:/\.vue$/,use: 'vue-loader'}
var vm = new Vue({
    el: "#app",
    data:{
        msg: '123'
    },
    // components:{
    //     login
    // }
    render: function(createElements){//在webpack中，如果想要通过vue，把一个组件放到页面中去展示，vm实例的render函数可以实现
        return createElements(login)
    }
})
// 总结梳理：webpack中如何使用 vue：
// 1.安装vue的包： cnpm i vue -S   
// 2.由于在webpack中，推荐使用.vue这个组件模板文件定义组件，所以，需要安装能够解析这种文件的loader cnpm i vue-loader vue-template-compiler -S
// const VueLoaderPlugin = require('vue-loader/lib/plugin');  new VueLoaderPlugin()
// 3.在main.js中，导入vue模块 import Vue from 'vue'
// 4.定义一个.vue结尾的组件，其中，组件有三部分组成：template script style
// 5.使用import login from './login.vue'导入这个组件
// 6.创建vm实例 var vm = new Vue({el:"#app",render：})
// 7.在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域




import m1,{title,content} from '../src/test.js'
console.log(m1);
console.log(title,content);