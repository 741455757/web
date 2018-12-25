###品牌列表案例
## 03.完成品牌列表添加功能
+ 1. 比较好的代码段
    <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
    </div>
    <div class="panel-body form-inline">
        <label for="">
            Id:
            <input type="text" class="form-control">
        </label>
        <label for="">
            Name:
            <input type="text" class="form-control">
        </label>
        <input type="button" value="添加" class="btn btn-primary">
    </div>
+ 2. 我们更多的是在进行VM中Model数据的操作，同时操作Model数据的时候，指定业务逻辑
## 04.根据 id完成品牌的删除
数组的遍历用法
+ 1.
    this.list.some((item, i)=>{
        if(item.id == id) {
            this.list.splice(i, 1);
            // 在数组的some方法中，如果returntrue，就会立即终止这个数组的循环
            return true;
        }
    })
+ 2.
    var index =  this.list.findIndex(item => {
        if(item.id == id) {
            return true;
        }
    }) 
## 05.Vue调试工具`vue-devtools`的安装步骤和使用

[Vue.js devtools - 翻墙安装方式 - 推荐](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN) 


## 06.品牌案例-根据关键字实现数组的过滤
注意：forEach some filter findIndex

ES6中，为字符串提供一个新的方法，String.prototype.includes('要包含的的字符串')
### 2.07.过滤器-Vue中全局过滤器的基本使用
+ 1. 过滤器调用时候的格式 {{name| 过滤器的名称}}
+ 2. Vue.filter('过滤器的名称',function(){})
### 2.08.过滤器-定义格式化时间的全局过滤器
定义一个Vue全局的过滤器，名称叫做 msgFormat
 Vue.filter('msgFormat', function(msg) {
     // 字符串 replace方法，第一个参数，除了可写一个字符串之外，还可以定义一个正则
     return msg.replace(/单纯/g, '恶魔般')
 })
### 2.09.过滤器-定义私有过滤器
 var vm2 = new Vue({
    el: '#app2',
    data: {
        dt: new Date()
    },
    filters:{//定义私有的过滤器 过滤器有两个条件 【过滤器名称和处理函数】
    // 过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候优先调用私有过滤器
        dateFormat:function(dateStr,pattern=""){
        }
    }

});