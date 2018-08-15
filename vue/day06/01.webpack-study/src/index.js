// 项目入口js文件

import './css/index.css'
import './css/index.scss'
// 注意：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略 路径前面的node_modules这层目录，直接写包的名额航，然后后面跟上具体的文件路径
// 不写node_modules这层目录，默认就会去node_modules中查找
import 'bootstrap/dist/css/bootstrap.css'
console.log('ok');


// class关键字，是ES6中提供的最新语法，是用来实现ES6中面向对象编程的方式
class Person{
    // 使用static关键字可以定义静态属性
    // 所谓的静态属性，就是直接通过雷鸣，直接访问属性
    // 实例属性： 只能通过类的实例，来访问属性，叫做实例属性
    static info = {name: 'zs',age:20}
}
// 访问Person类身上的 info静态属性
console.log(Person.info);
// webpack中，默认只能处理一部分 ES6的新语法，一些更高级的ES6语法或者ES7语法，
// webpack是处理不了的；这时候，就需要借助第三方的loader，来帮助webpack处理这些高级的语法
// 当第三方loader把高级语法转换为低级的语法之后，会把结果交给webpack去打包到bundle.js

// 通过Babel可以帮助我们将高级的语法转换为低级的语法
// 1.在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能：
// 1.1第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime -S
//1.2第二套包：cnpm i babel-preset-env babel-preset-stage-0 -S
// 2打开webpack的配置文件，在module节点下的rules数组中添加一个新的匹配规则
// 2.1{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 2.1.1如果不排除 node_modules，则Babel会把node_modules中所有的第三方js文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢
// 3. 在项目 根目录中，新建一个叫做.babelrc的Babel配置文件，这个配置文件，属于JSON格式，所以在写.babelrc配置的时候，必须
// 符合JSON语法规范；不能写注释，字符串必须用双引号
// 3.1在.babelrc写如下的配置
// 4.了解：目前，我们安装的babel-preset-env是比较新的ES语法，之前，我们安装的是babel-preset-es2015，现在，出了个更新的语法插件，叫做babel-preset-env
// 它包含了所有ES****的语法

// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }