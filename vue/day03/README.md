### 3.01.品牌列表-从数据库获取列表
+ bs3-table
+ bs3-panel
+ form-inline form-control
### 3.02品牌列表-完成添加功能
### 3.03.品牌列表-完成删除功能
### 3.04.品牌列表-全局配置数据接口的根域名
 // 如果我们通过全局配置了，请求的数据接口 根域名，则每次单独发起http请求的时候，请求的url路径，应该以相对路径开头，前面不能带/，否则不会启用根路径拼接
    Vue.http.options.root = 'http://vue.studyit.io';
### 3.05.品牌列表-全局配置emulateJSON选项
 // 全局启用emulateJSON选项
Vue.http.options.emulateHTTP = true;
请求参数可以删除{emulateJSON: true}
### 3.6.动画-使用过渡类名实现动画
+ 1. 使用transition元素，把需要被动画控制的元素，包裹起来 
<!-- transition元素，是Vue官方提供的 -->
<transition>
    <h3 v-if="flag">这是一个H3</h3>
</transition>
+ 2. 自定义两组样式，来控制transtion内部的元素实现动画
    <style>
        /*
            v-enter 【这是个时间点】是进入之前，元素的起始状态，此时还没开始进入
            v-leave-to  【这是个时间点】是动画离开之后，离开的终止状态，此时，元素 动画已经结束了
         */
         .v-enter,
         .v-leave-to{
             opacity: 0;
             transform: translateX(150px);
         }
         /* v-enter-active【入场动画的时间段】 */
         /* v-leave-active【离场动画的时间段】 */
         .v-enter-active,
         .v-leave-active{
             transition: all 0.8s ease;
         }
    </style>
