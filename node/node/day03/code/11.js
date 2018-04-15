// 遍历目录中的文件


const fs = require("fs");
const path = require("path");
require('./timeFormat');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[3]||'./');


fs.readdir(target, (error,files)=>{
    //  console.log(files);
    files.forEach((file) => {
        fs.stat(path.join(target, file), (err, stats) =>{
             console.log(`${stats.ctime.format('yyyy/MM/dd hh:mm:ss')}\t${stats.size}\t${file}`);
        })
    })
    
})


// fs.readdir(target, (error,files)=>{
//     //  console.log(files);
//     files.forEach((file) => {
//         fs.stat(path.join(target, file), (err, stats) =>{
//             if(stats.isDirectory()){
//                 var dirSize = countSize(path.join(target, file) , stats);
//                 console.log(`${stats.ctime.format('yyyy/MM/dd hh:mm:ss')}\t${dirSize}\t${file}`);
//             }else{
//                 console.log(`${stats.ctime.format('yyyy/MM/dd hh:mm:ss')}\t${stats.size}\t${file}`);
//             }
//         })
//     })
    
// })

// function countSize(filePath, status)
// {
//     if(status.isDirectory()){
//         fs.readdirSync(filePath, (error,files)=>{
//             var fileSize = 0;
//             files.forEach((file) => {
//                 fs.stat(path.join(filePath, file), (err, stats) =>{
//                     fileSize += countSize(path.join(filePath, file), stats);
//                 })
//             }) 
//             return fileSize;
//         })
//     }else{
//         return status.size;
//     } 
    
   
// }