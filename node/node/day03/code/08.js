// 文件写入


const fs = require("fs");
const path = require("path");
var  filename = path.join(__dirname, './temp.txt');

// fs.writeFile();
// JSON.stringify 序列化
// JSON.parse 反序列化
// fs.writeFile(filename, JSON.stringify({id:10}), (error)=>{
//     if(error){
//         // 读文件是不存在报错
//         // 意外错误
//         // 文件权限问题
//         // 文件夹找不到（不会自动创建文件夹）
//         console.log(error);
//     }else{
//         console.log("success");
//     }
// })
// fs.writeFileSync();

// fs.createWriteStream();
var streamWriter= fs.createWriteStream(filename);
streamWriter.write('hello');