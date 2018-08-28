// 需求：你需要封装一个方法，我给你一个读取文件的路径，你这个方法能帮助我读取文件，并把内容返回给我
const fs = require('fs');
const path = require('path');

// 这是普通的读取文件的方式
// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8',(err,dataStr)=>{
//     if(err) throw err;
//     console.log(dataStr);
// })

// 初衷：给定文件路径，返回读取的内容
// 我们可以规定一下callback中，有两个参数，第一个参数，是失败的结果；第二个参数是成功的结果
// function getFilesByPath(fpath,callback){
//     fs.readFile(fpath, 'utf-8',(err,dataStr)=>{
//         // 如果报错了，进入if分支后，if后面的代码就没有必要执行了
//         if(err) return callback(err);
//         // console.log(dataStr);
//         // return dataStr;
//         callback(null,dataStr);
//     })
// }

function getFilesByPath(fpath,sucCb, errCb){
    fs.readFile(fpath, 'utf-8',(err,dataStr)=>{
        // 如果报错了，进入if分支后，if后面的代码就没有必要执行了
        if(err) return errCb(err);
        // console.log(dataStr);
        // return dataStr;
        sucCb(dataStr);
    })
}

// var result = getFilesByPath(path.join(__dirname, './files/1.txt'));
// console.log(result);

// getFilesByPath(path.join(__dirname, './files/2.txt'),(err,dataStr)=>{
//     if(err) return console.log(err+'失败了');
//     console.log(dataStr+ '====');
// })

getFilesByPath(path.join(__dirname, './files/2.txt'),function(data){
    console.log(data+ '====');
},function(err){
    if(err) return console.log(err+'失败了');
})

