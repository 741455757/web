// 自己写一个require函数
"use strict"
function $require(id){
        // 先找到文件 如果找不到文件 抛出异常Error: Cannot find module './module/modul'
        // 读取文件内容
        const fs = require('fs');
        const path = require("path");
        const filename = path.join(__dirname , id);
        const dirname = path.dirname(filename);
       let code = fs.readFileSync(filename ,"utf8"); //不会进入事件队列
        // 执行代码 所要执行的代码需要营造一个私有空间
        let module = {id: filename, exports:{}};
        let exports = module.exports;
        code=`(function($require, module, exports, __filename, __dirname){
                ${code}
        })($require, module, exports, filename, dirname);`;

        // （function($require, module, exports, __filename, __dirname){
        //         function say(msg){
                        // console.log(msg);
                        // }
                        // module.exports = {say};
        // })($require, module, exports, filename, dirname);
        eval(code);
        // 返回值

        return module.exports;
}



  var m4 = $require("./module/module4.js");
  m4.say("hello")