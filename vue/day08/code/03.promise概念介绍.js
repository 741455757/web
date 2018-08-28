// 1. Promise是一个构造函数，既然是构造函数，那么，我们就可以 new Promise()得到一个 promise的实例
// 2.在Promise上，有两个函数，分别叫做resolve（成功之后的回调函数）和 reject（失败之后的回调函数）
// 3. 在Promise构造函数的Prototype属性上，有一个.then()方法，也就是说，只要是Promise构造函数创建的实例，都可以访问到.then()方法
// 4.Promise表示一个异步操作；每当我们new一个Promise的实例，这个实例，就表示一个具体的异步操作；
// 5. 既然Promise创建的实例，是一个异步操作，那么，这个异步操作的结果，只能有两种状态
//  5.1状态1：异步执行成功了，需要在内部调用 成功的回调函数resolve把结果返回给调用者
//  5.2状态2：异步执行失败了，需要在内部调用 失败的回调函数 reject把结果返回给调用者
//  5.3由于Promise的实例，是一个异步操作，所以，内部拿到 操作的结果后，
//      无法使用return把操作的结果返回给调用者；这时候，只能使用回调函数的形式，来把成功或者失败的结果，返回给调用者；
// 6. 我们可以new出来的Promise实例上，调用.then()方法，【预先】 为这个Promsie异步操作，指定 成功(resolve)和失败(reject)回调函数；



// 注意：这里new出来的promise。只代表【形式上】的一个异步操作
// 什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做具体的异步事情，目前还不清楚
// var promise= new Promise()


// 这是一个具体的异步操作，其中，使用function制定一个具体的异步操作
// var promise = new Promise(function(){
//     // 这个function 内部写的就是具体的异步操作
// })

const fs = require('fs');
// 初衷：给路径，返回读取到的内容
function getFileByPath(fpath){
    // 每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
    var promise = new Promise(function(resolve, reject){
        fs.readFile(fpath,'utf-8',(err, dataStr)=>{
            // if(err) throw err
            // console.log(dataStr);
            if(err) return reject(err);
            resolve(dataStr);
        })
    })

    return promise;
}
var p = getFileByPath('./files/1.txt');
p.then(function(data){
    console.log(data+'---');
},function(err){
    console.log(err.message);
})


