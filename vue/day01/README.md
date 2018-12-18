### 1.6MVC和MVVM的关系图解

### 1.7 Vue基本代码和MVVM之间对应关系
+ 1. 导入vue包
+ 2. 创建Vue实例
+ 3. vue控制区域

###  1.8.讲解v-cloak、v-text、v-html的基本使用
+ 1. v-cloak 有效 解决插值表达式闪烁问题
+ 2. v-text会覆盖元素中原本的内容
+ 3. v-html 渲染html标签，v-text不会渲染html标签

### 1.9 Vue指令之v-bind的三种用法
+ 1. v-bind: 是Vue中，提供的用语绑定属性的指令
+ 2. v-bind:指令可以被简写为 ：要绑定的属性
+ 3. v-bind中，可以写合法的js表达式
### 1.10 使用v-on指令定义Vue中的事件

## 总结
+ 1. 如何定义一个基本的Vue代码结构
+ 2. 插值表达式 和 v-text
+ 3. v-cloak
+ 4. v-html
+ 5. v-bind Vue提供的属性绑定机制 缩写是:
+ 6. v-on   Vue提供的属性绑定机制 缩写是@

### 1.11跑马灯效果制作-上
### 1.12跑马灯效果制作-下

### 1.13.事件修饰符的介绍
+ 1. .stop 阻止冒泡

+ 2. .prevent 阻止默认事件

+ 3. .capture 添加事件侦听器时使用事件捕获模式

+ 4. .self只会阻止自己身上冒泡行为的触发，并不会真正的 阻止冒泡行为

+ 5. .once 事件只触发一次
### 1.14.讲解v-model实现表单元素的数据双向绑定
+ 1. v-vind 只能实现数据的单向绑定， 从M 自动绑定到V 不能双向数据绑定
+ 2. 使用 v-model指令，可以实现 表单元素和Model 中数据的双向数据绑定
+ 3. 注意：v-model 只能运用在表单元素中 input(radio, text, address, email...) select checkbox
### 简易计算器案例

## 在Vue中使用样式
### 使用class样式
1. 数组   第一种方式，直接传递一个数组，注意，这里的class需要使用 v-bind做数据绑定
```
<h1 :class="['red', 'thin']">这是一个邪恶的H1</h1>
2. 数组中使用三元表达式
```
<h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的H1</h1>
```
4. 直接使用对象
```
<h1 :class="{red:true, italic:true, active:true, thin:true}">这是一个邪恶的H1</h1>
```

### 使用内联样式
### 使用内联样式

1. 直接在元素上通过 `:style` 的形式，书写样式对象
```
<h1 :style="{color: 'red', 'font-size': '40px'}">这是一个善良的H1</h1>
```

2. 将样式对象，定义到 `data` 中，并直接引用到 `:style` 中
 + 在data上定义样式：
```
data: {
        h1StyleObj: { color: 'red', 'font-size': '40px', 'font-weight': '200' }
}
```
 + 在元素中，通过属性绑定的形式，将样式对象应用到元素中：
```
<h1 :style="h1StyleObj">这是一个善良的H1</h1>
```

3. 在 `:style` 中通过数组，引用多个 `data` 上的样式对象
 + 在data上定义样式：
```
data: {
        h1StyleObj: { color: 'red', 'font-size': '40px', 'font-weight': '200' },
        h1StyleObj2: { fontStyle: 'italic' }
}
```
 + 在元素中，通过属性绑定的形式，将样式对象应用到元素中：
```
<h1 :style="[h1StyleObj, h1StyleObj2]">这是一个善良的H1</h1>
```
## Vue指令之`v-for`和`key`属性

1. 迭代数组
<ul>
  <li v-for="(item, i) in list">索引：{{i}} --- 姓名：{{item.name}} --- 年龄：{{item.age}}</li>
</ul>
2. 迭代对象中的属性
	<!-- 循环遍历对象身上的属性 -->
    <div v-for="(val, key, i) in userInfo">{{val}} --- {{key}} --- {{i}}</div>
3. 迭代数字
<p v-for="i in 10">这是第 {{i}} 个P标签</p>

###v-for循环key属性的使用
 在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果v-for有问题，必须 在使用v-for的同时，指定唯一的字符串/数字 类型:key
### v-if和v-show的使用和特点
v-if的特点 每次都会重新删除或者创建元素 
v-show的特点 每次不会重新进行DOM的删除或者创建，只切换了元素的display:none样式
v-if 有较高的切换性能消耗
v-show有较高的初始渲染消耗
如果元素谁到频繁的切换，最好不要使用v-if，而是推荐使用v-show
如果元素可能永远也不会显示出来被用户看到，则推荐使用v-if