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