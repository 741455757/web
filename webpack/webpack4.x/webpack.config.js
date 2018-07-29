const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/foo.bundle-[hash].js'
  },
  devServer:{
    contentBase: "./dist",
    // 本地服务路径
    inline:true
    // 实时刷新
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        // 有顺序，style-loader必须放第一个
        // use:['style-loader','css-loader']
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:'css-loader',
            options:{
              minimize:true
            }
          }],
          publicPath:"../"
        })
      },
      {
        test:/\.(jpg|png|jpeg)$/,
        use: 'file-loader?limit=1024&name=./images/[name].[ext]'
      },
      {
        test:/\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test:/\.(eot|woff|svg|ttf|woff2)$/,
        use: 'file-loader?limit=1024&name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify:{
        collapseWhitespace:true,// 去除空格
        removeComments:true,// 去除注释
        removeAttributeQuotes:true,// 去除引号
        removeEmptyAttributes:true// 去除多余的属性
      }
    })
  ]
};