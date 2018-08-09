const path = require('path');
// 导入内存中生成的HTML页面的插件
// 只要是插件，都一定要放到 plugins节点中去

const htmlWebpackPlugin = require('html-webpack-plugin');
// 这个插件的两个作用
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动，把打包好的bundle.js追加到页面中去

// 这个配置文件，起始就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
  entry: path.join(__dirname,'./src/index.js'),//入口 表示 要使用webpack 打包的那个文件
  output: {
    path: path.join(__dirname, 'dist'),//指定打包好的文件，输出到哪个目录中去
    filename: 'bundle.js'//指定输出文件的名称
  },
  plugins:[//配置插件的节点
    new htmlWebpackPlugin({//创建一个在内存中 生成HTML页面的插件
      template: path.join(__dirname, './src/index.html'),//指定模板页面，将来会根据指定的
      // 页面路径，去生成内存中的页面
      filename: 'index.html'//指定生成页面的名称

    })
  ],
  module:{//这个节点，用于配置 所有第三方 模块加载器
    rules:[//所有第三方模块的 匹配规则
      {test:/\.css$/, use:['style-loader','css-loader']}//配置处理，css文件的第三方loader规则
    ]
  }
};

// 当我们 在控制台，直接输入webpack命令的时候 webpack做了以下几步：
// 1.首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2.webpack就会去项目的根目录中，查找一个叫做‘webpack.config.js’的配置文件
// 3.当找到配置文件后,webpack回去解析执行这个配置文件,当解析执行完配置文件后,就得到了配置文件中,导出的配置对象


// 使用webpack-dev-server这个工具，来实现自动打包编译的功能
// 1.运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法，和wepack命令的用法，完全一样
// 3.由于，我们是在项目中，本地安装的webpack-dev-server，所以，无法把它当做脚本命令，在powershell终端中直接运行；
// 只有那些安装到全局-g的工具，才能在终端中正常运行
// 4.注意：webpack-dev-server这个工具，如果想要正常运行，要求，本地项目中，必须安装webpack
// 5.webpack-dev-server帮我们打包生成的bundle.js文件，并没有存放到实际的 物理磁盘上；而是，
// 直接托管到电脑内存中，所依，我们在项目根目录中，根本找不到 这个打包好的bundle.js
// 6.我们认为，webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到咱们项目的根目录中，虽然我们看不见它，但是，可以认为，和dist src node_modules平级，有一个看不见的文件，叫做bundle.js