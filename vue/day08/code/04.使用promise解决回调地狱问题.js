const fs = require('fs');
// 初衷：给路径，返回读取到的内容
function getFileByPath(fpath){
    // 每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
    return new Promise(function(resolve, reject){
        fs.readFile(fpath,'utf-8',(err, dataStr)=>{
            // if(err) throw err
            // console.log(dataStr);
            if(err) return reject(err);
            resolve(dataStr);
        })
    })
}

// 先读取文件1，在读取文件2，最后读取文件3
// 注意：通过.then指定回调函数的时候，成功的回调函数，必须传，但是，失败的回调，可以省略不传
getFileByPath('./files/1.txt')
    .then(function(data){
        console.log(data+'---');
        // 读取文件2
        return getFileByPath('./files/2.txt')
    })
    .then(function(data){
        console.log(data+'---');
        // 读取文件3
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data+'---');
    })
    
