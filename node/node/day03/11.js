
console.log(module);

var module3 = require('./module/module3');

if(module.parent){
    //当前这个文件被其他文件加载
}else{
    // 入口文件
}
