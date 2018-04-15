// 递归目录树

// 先写一层的情况 不调用
// 抽象递归参数
// 找到突破点(避免死循环)
// 自己调自己，某种情况（肯定会有的）

const fs = require("fs");
const path = require("path");
require('./timeFormat');

// 获取当前有没有传入目标路径  │
var target = path.join(__dirname, process.argv[3]||'./');

function load(target, depth) {

    // depth = 0   ''
    // depth = 1    '| '
    // depth = 2    '| | '

    var prefix = new Array(depth+1).join('│ ')
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
    dirs.forEach(dir=>{
        console.log(`${prefix}├${dir}`);
        load(path.join(path.join(target, dir)), depth + 1);
    });
    var Count =files.length - 1;
    files.forEach(file=>{
        console.log(`${prefix}${Count--?'├':'└'}${file}`);
    })  
}

load(target, 0);
