// 递归目录树

// 先写一层的情况 不调用
// 抽象递归参数
// 找到突破点(避免死循环)
// 自己调自己，某种情况（肯定会有的）

const fs = require("fs");
const path = require("path");
require('./timeFormat');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[3]||'./');


var dirs = [];
var files = [];


var dirinfos = fs.readdirSync(path.join(target));
dirinfos.forEach((info) => {
    var stats= fs.statSync(path.join(target, info));
    if(stats.isFile()){
       files.push(info);
    }else{
        dirs.push(info);
    }
 })
// ├└
// dirs.forEach(dir=>{
//     console.log(`├${dir}`);
//     // 当前是一个目录，需要深入进去
//     var subdirs = [];
//     var subfiles = [];
//     var subdirinfos = fs.readdirSync(path.join(target, dir));
//    subdirinfos.forEach((subinfo) => {
//         var substats= fs.statSync(path.join(path.join(target, dir), subinfo));
//         if(substats.isFile()){
//          subfiles.push(subinfo);
//         }else{
//              subdirs.push(subinfo);
//         }
//      })
//      subdirs.forEach(subdir=>{
//         console.log(`├${subdir}`);
//     });
//     var subCount =subfiles.length - 1;
//     subfiles.forEach(file=>{
//         console.log(`${subCount--?'├':'└'}${file}`);
//     })  
// })  



//  dirs.forEach(dir=>{
//     console.log(`├${dir}`);
// });
var Count =files.length - 1;
files.forEach(file=>{
    console.log(`${Count--?'├':'└'}${file}`);
})  

