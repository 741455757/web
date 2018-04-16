//__dirname不能乱用

var fs = require("fs");
var path = require("path");

var mkdirs = require("./modules/mkdirs.js");


mkdirs(path.join(__dirname, 'f1/f2/f3'));
mkdirs(path.join(__dirname, 'f1/f2/f3/f4'),(err) => {
    if(err) console.log(err);
})；
