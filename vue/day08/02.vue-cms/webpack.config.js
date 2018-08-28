// 由于webpack是基于node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require("path");


// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个plugins节点

var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');




// 当以命令形式运行webpack或webpack-dev-server的时候，工具会发现我们并
// 没有提供 要打包的文件的入口和出口文件，此时，他会检查项目根目录的配置文件，并读取这个文件
// 就拿导出的这个配置对象 ，然后根据这个对象进行打包构建

module.exports = {
    entry: path.join(__dirname,'./src/index.js'),//入口文件
    output:{//指定输出选项
        path: path.join(__dirname, './dist'),//输出路径
        filename: 'bundle.js'//指定输出的文件名称
    },
    module:{//配置所有第三方loader模块的
        rules:[//第三方模块的配置原则
            {test: /\.css$/, use:['style-loader','css-loader']},//处理css文件的loader
            {test: /\.less$/, use:['style-loader','css-loader','less-loader']},//处理less文件的loader
            {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']},//处理scss文件的咯ader
            {test: /\.(jpg|png|fig|bmp|jpeg)$/,use:'url-loader?limit=124896&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
    //    limit给定的值，是图片的大小，单位byte，如果我们引用的图片，大于或者等于给定的limit值，则不会转换为base64格式的字符串，
    // 如果 图片小于给定的limit值，则会被转换为base64的字符串
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},//处理文字文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'} 
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板文件路径
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{//修改Vue被导入时候的包路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}