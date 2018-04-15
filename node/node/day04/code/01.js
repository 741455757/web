// 创建文件夹

const fs = require("fs");
const path = require("path");
// fs.mkdir(path[, mode], callback)

// fs.mkdir(path.join(__dirname, 'demo2/demo3'),(err) => {
//     if(err) console.log(err);
// });


// { Error: ENOENT: no such file or directory, mkdir 'd:\code\git\web\node\node\day04\code\demo2\demo3'
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'mkdir',
//   path: 'd:\\code\\git\\web\\node\\node\\day04\\code\\demo2\\demo3' }


const mkdirs = require("./mkdirs");
// mkdirs('demo2/demo3');
mkdirs(path.join(__dirname, 'demo2/demo3'),(err) => {
    console.log(err);
});
