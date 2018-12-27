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
### 2.10.字符串的padStart方法使用
使用ES6中的字符串新方法 String.prototype.padStart(maxLength, fillString='') 或 String.prototype.padEnd(maxLength, fillString='')来填充字符串；
### 2.11.自定义按键修饰符
全部的按键别名：
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
// 自定义全局按键修饰符 
Vue.config.keyCodes.f2=113;
### 2.12.指令-自定义全局指令让文本框获取焦点
// 使用 Vue.directive()定义全局的指令 v-focus
// 其中：参数1：指令的名称，注意，在定义的时候，指令的名称前面，不需要加v-前缀
// 但是： 在调用的时候，必须在指令名称前面加上 v- 前缀来进行调用
// 参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
Vue.directive('focus', {
    bind: function (el){// 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
        // 注意：在每个函数中，第一参数永远是el，表示被绑定了指令的那个元素，这个el参数，是一个原生的JS对象
        // 在元素刚绑定了指令的时候，还没有插入到DOM中去，这时候，调用focus方法没有使用
        // 因为，一个元素，只有插入DOM之后，才能获取焦点
        // el.focus();
    },
    inserted: function(el){//inserted表示元素插入到DOM中的时候，会执行 inserted函数【触发一次】
        el.focus();
    },
    updated: function(el) {// 当VNode更新的时候，会执行Uupdated，可能会触发多次
        
    },
})