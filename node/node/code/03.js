
//读取文件
const fs = require("fs");
const path = require("path");


// readFile的方式确实使用了buffer，但是也是一次性读取
fs.readFile(path.join(__dirname, "../lrcs/毛慧 - 侯雪.lrc"),(error,data)=>{
    console.log(data.toString('utf8'));
});