//监视文件转换为html
//fs.watch(filename[, options][, listener])
//fs.watchFile(filename[, options], listener)
// markdown文件自动转换

//fs.watch(filename[, options][, listener])
//fs.watchFile(filename[, options], listener)

const fs = require("fs");
const path = require("path");
const marked = require( "marked" );

//接收需要转换的文件路径
 const target = path.join(__dirname, process.argv[2]||'./README.md');
//  监视文件的变化

fs.watchFile(target, (curr, prev) => { 
    // 监视文件变化，可以理解为当文件发生变化（需要保存才能触发文件变化); 观察文件不管有没有修改，只要保存都会触发这个事件
    //  console.log(`current: ${curr.size}\tprevious:${prev.size}`);
    // 判断文件到底有没有变化 修改时间
    if(curr.mtime == prev.mtime) {
        return false;
    }
    //读取文件 转换为新的html
    fs.readFile(target, 'utf8',(err,data) => {
        if(err) throw err;
        var html = marked(data);
        console.log(html);//只是html正文的内容
        
        fs.writeFile(target.replace('.md','.html') , template.replace('{{{content}}}', html));
    })
});


var template = `
    <!DOCTYPE html>
<html>
<head>
    <meta  content="text/html; charset=utf-8"/>
   
</head>
<body>
   {{{content}}}
</body>
</html>
`;
