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
### 2.13.指令-使用钩子函数的第二个binding参数拿到传递的值
// 自定义一个设置字体颜色的指令
    Vue.directive('color', {
        bind: (el, binding) => {
            // 样式，只要通过指令绑定给了元素，不管这个元素有没有被插入到页面中去，这个元素肯定有一个内联的样式
            // 将来元素肯定会显示到页面中，这个时候，浏览器的渲染引擎必然会解析样式，应用给这个元素
                // el.style.color = 'red';
            // 和样式相关的操作，一般都可以在bind执行
            console.log(binding.name);
            console.log(binding.value);
            console.log(binding.expression);
            el.style.color = binding.value;
        }
    })
### 2.14.指令-定义私有指令
v-directiveName=""
var vm = new Vue({
    'el': '#app',
    data:{},
    filters:{},
    directives: {
        'directiveName':{
            binding:(el, binding) {}
        }
    }
})
### 2.15.指令-指令函数的简写形式
var vm = new Vue({
    'el': '#app',
    data:{},
    filters:{},
    directives: {// 自定义私有指令
        'fontweight': {
            bind: function(el, binding) {
                el.style.fontWeight = binding.value;
            }
        },
        'fontsize': function (el, binding) {
                el.style.fontSize = binding.value;//注意这个function等同于把代码写到了bind和update中去
        }
    }
})
### 2.16.生命周期函数-组件创建期间的4个钩子函数
+ 什么是生命周期：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期！
+ [生命周期钩子](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)：就是生命周期事件的别名而已；
+ 生命周期钩子 = 生命周期函数 = 生命周期事件
+ 主要的生命周期函数分类：
 - 创建期间的生命周期函数：
  	+ beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
  	+ created：实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
  	+ beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中
  	+ mounted：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
 - 运行期间的生命周期函数：
 	+ beforeUpdate：状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
 	+ updated：实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
 - 销毁期间的生命周期函数：
 	+ beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
 	+ destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
### 2.17.生命周期函数-组件运行和销毁阶段的钩子函数
+ 只要执行完mounted就表示 整个vue实例 已经初始化完毕；此时组件已经脱离了 创建阶段，进入 运行阶段
+ 运行阶段的 声明周期函数 只有两个 beforeUpdate和updated
+ 这两事件，会根据data数据的改变，有选择性的 触发0次 或者 多次
- 这一步执行的是： 先根据data中最新的数据，在内存中重新渲染出一根，最新的内存DOM树，
当最新的 内存DOM树被更新之后，会把最新的内存DOM树，重新渲染到真实的页面中去，这时候，就完成了数据从data（Model层）->view（视图层）的更新
+ 当执行 beforeDestroy钩子函数的时候，Vue实例就已经从运行阶段，进入到销毁阶段；
+ 当执行 beforeDestroy的时候，实例身上所有的data和所有的methods，以及过滤器，指令。。。都处于可用状态，此时，还没有真正的执行销毁的过程
+ 当执行destroyed函数的时候，组件已经被完全销毁了，此时，组件中所有的数据，方法，指令，过滤器。。。都已经不可用了
