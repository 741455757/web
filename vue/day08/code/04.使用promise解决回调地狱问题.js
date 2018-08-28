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
 // 在上一个.then中，返回一个新的promise实例，可以继续用下一个.then来处理

//  如果，前面的Promise执行失败，我们不想让后续的Promise操作被终止，可以为每个promsie指定失败的回调
// getFileByPath('./files/21.txt')
//     .then(function(data){
//         console.log(data+'---');
//         // 读取文件2
       
//         return getFileByPath('./files/2.txt')
//     },function(err){
//         console.log('这是失败的结果：'+ err.message);
//         // return一个新的Promise
//         return getFileByPath('./files/2.txt');
//     })
//     .then(function(data){
//         console.log(data+'---');
//         // 读取文件3
//         return getFileByPath('./files/3.txt')
//     })
//     .then(function(data){
//         console.log(data+'---');
//     })
//     console.log('okokok');

    // 当 我们有这样的需求:哪怕前面的Promise执行失败了，但是不要影响后续promise的正常执行，此时，我们可以单独为
    // 每一个Promise,通过.then指定一下失败的回调；

    // 有时候，我们有这样的需求，和上面的需求刚好相反；如果后续的Promise只想，以来于前面Promise执行的结果，如果
    // 前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，但报错，则立即终止所有Promise的执行
    
    getFileByPath('./files/21.txt')
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
    .catch(function(err){//catch的作用：如果前面有任何的Promise执行失败，则立即终止所有Promise的执行，并马上进入
        // catch去处理Promise中 抛出异常
        console.log('这是自己的处理方式：'+ err.message);
    })
    console.log('okokok');