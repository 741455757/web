// 创建层级目录

const fs = require("fs");
const path = require("path");
// 创建模块文件，定义模块成员，导出模块成员，载入模块，使用模块

function mkdirs(pathname, callback){
    // 1.判断传入的是否是一个绝对路径
    // D:\code\git\web\node\node\day04\code\demo2\demo3
    // __dirname D:\code\git\web\node\node\day04\code
    pathname = path.isAbsolute(pathname)?pathname:path.join(__dirname, pathname);
    // 获取要创建的部分
    // pathname = pathname.replace(__dirname, '');
//    var relativepath = path.relative(__dirname, pathname);
    // console.log(pathname); 
    var relativepath = path.relative(__dirname, pathname);
    var folders = relativepath.split(path.sep);
    
    
    try {
        var pre = '';
        folders.forEach((folder) => {
            fs.mkdirSync(path.join(__dirname, pre, folder));
            pre = path.join(pre,folder);
            // console.log(pre);
        })
        
        callback && callback(null);
        
    } catch (error) {
        callback && callback(error);
    }
    
     
}

// module.exports = {mkdirs};
module.exports = mkdirs;