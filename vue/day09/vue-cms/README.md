##制作首页App组件
1.完成 header区域，使用的是Mint-UI中 Header组件
2.制作底部 Tabber区域，使用的是MUI的Tabbar.html
    +在制作购物车小图标的时候，操作会相对多一些
    +先把扩展图标的css样式，拷贝到项目中
    +拷贝扩展字体库ttf文件，到项目中
    +为购物车小图标添加如下样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3.要在中间区域放置一个router-view来表示路由匹配规则组件


## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据，如何获取呢，使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染么一个item项

## 改造九宫格区域的样式

## 改造新闻资讯 路由链接

## 新闻资讯 页面 制作
1.绘制界面
2.使用vue-resource获取数据
3.渲染真实数据

##实现 新闻资讯列表 点击跳转新闻详情
1.把列表中的每一项改造为router-link,同时，在跳转的时候英爱提供唯一的Id标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情的 路由地址 和 组件页面对应起来


##实现 新闻详情的 页面布局 和数据渲染

## 单独封装一个 comment.vue评论子组件
1.先创建一个单独的 comment.vue组件模板
2.在需要使用comment组件的页面中，先动手 导入comment组件
 + `import comment from './comment.vue'`
3.在父组件中，使用‘componets’属性，将刚才导入comment组件，注册为自己的 子组件
4.将注册子组件时候的，注册名称，以标签的形式，在页面中引用即可
###https://coral.qq.com/article/3038337827/hotcomment?source=10&commentid=0&reqnum=10&callback=__jp0

##获取所有的评论数据显示到页面中
1.getComments


## 实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getcomments()重新获取新一页数据
3. 为了防止新数据覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，英爱让老数据调用数组concat方法，拼接上新数组
## 发表评论
1.把文本框做成双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4.通过Vue-resource发送一个请求，把评论内容提交给如服务器
5.当发表评论OK后，重新刷新刷新列表，以查看最新的评论
    + 如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
    + 换一种思路：当评论成功后，在客户端，手动拼接出 最新的评论对象，然后 调用数组的 unshift方法，把最新的评论，追加到data中comments的开头；这样，就能完美实现舒心评论列表的需求；

## 改造图片分析按钮为路由的链接并显示对应的组件页面

##绘制 图片列表 组件页面结构并美化样式
1.制作顶部的滑动条
2.制作底部的图片列表
### 制作顶部滑动条的坑们
1.需要借助MUI中的tab-top-webview-main.html
2.需要把slider区域的mui-fullscreen类去掉
3.滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化
    + 导入mui.js
    + 调用官方提供的 方式 去初始化
```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4. 我们在初始化 滑动条的时候，导入mui.js，但是，控制台报错： `mui.min.js:946 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
    + 经过我们合理的推测，觉得，可能是mui.js中用到了 'caller', 'callee', and 'arguments'东西，但是，webpack打包好的bundle.js中，默认是启用严格模式的，所以，这两者冲突了
    + 解决方案：1. 把mui.js中非严格模式的代码改掉；但是不显示；2.把webpack打包时候的严格模式禁用掉；
    + 最终，我们选择 plan B移除严格模式；使用这个插件
    babel-plugin-transform-remove-strict-mode
    5. 刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条，必须等DOM元素加载完毕，所以，我们把初始化 滑动条的代码，搬到了mounted生命周期函数中
    6. 当滑动条 调试ok后， 发现，tabbar无法正常工作了，这时候，我们需要把每个tabbar按钮的样式中`mui-tab-item`重新修改下名字；