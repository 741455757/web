// 流


const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");
const readline = require("readline");
var filename = path.join(__dirname, '../lrcs/1.lrc');

var streamReader = fs.createReadStream(filename)
                    .pipe(iconv.decodeStream('gbk'));
var rl = readline.createInterface({input: streamReader});
var begin = new Date().getTime();
rl.on('line',(line)=>{
    task(line, begin);
    // console.log(typeOf line);string
})
// var data = '';
// streamReader.on('data', (chunk)=>{
//     data += chunk.toString();
// });

// streamReader.on('end', ()=>{
//     console.log(data);
// })

var regx = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/
function task(line, begin){
    var matches = regx.exec(line);
    if(matches){
        var m = parseFloat(matches[1]);
        var s = parseFloat(matches[2]);
        var ms = parseFloat(matches[3]);
        var lyric = matches[4];
        var offset = new Date().getTime() - begin;
        setTimeout(()=>{
            console.log(line);
        }, m*60*1000 + s*1000 + ms - offset);
    }else{
        console.log(line);
    }
}
