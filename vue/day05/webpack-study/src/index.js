// main.js是我们项目的入口文件

// 1.导入jquery
// import *** from ***是ES6中导入模块的方式
// 由于ES6的代码，太高级了，浏览器解析不了，所以执行这行代码报错
import $ from 'jquery'

// 使用import语法，导入css样式表
import './css/index.css'
// 注意：webpack 默认只能打包处理 js类型的文件，无法处理其他非js类型的文件
// 如果要处理非js类型的文件，我们需要手动安装一些合适的第三方loader加载器；
// 1.如果打包处理css文件，需要安装cnpm i style-loader css-loader -S
// 2.打开webpack.config.js这个配置文件，在里面，新增一个配置节点，叫做module，它是一个对象；在这个module
// 对象身上，有个rules属性，这个rules属性是个数组；这个数组中，存放了，所有第三方文件匹配和处理规则；


$(function(){
    $('li:odd').css('backgroundColor', 'green');
    $('li:even').css('backgroundColor', function(){
        return '#'+'D97634'
    });
})
// 经过刚才的演示，webpack可以做什么事情？？
// 1.webpack能够处理js文件之间的互相依赖关系
// 2.webpack能够普处理js的兼容问题，把高级的，浏览器不识别的语法转为低级的浏览器能够识别的语法

// webpack --mode develpment   因为是4X版本