// __dirname不能乱用
var fs = require("fs");
var path = require("path");

function mkdirs(pathname, callback){
    // console.log(module);
    var root = path.dirname(module.parent.filename);
    //传入的路径是否是一个绝对路径  这是一个容易忽略的地方
    var pathname = path.isAbsolute(pathname)? path.join(pathname):path.join(root, pathname);
    // C:\Users\wWX419246\Documents\nodejsStudy\node\day04\code\demo2\demo3
    
    // pathname.replace(__dirname, '');
   var relativepath = path.relative(root, pathname);
    //    console.log(relativepath);
    //    path.posix
   var folders = relativepath.split(path.sep);
//    console.log(folders);

    try {
            var pre = '';
            folders.forEach((folder)=>{
                try {
                    fs.statSync(path.join(root, pre, folder));
                } catch (err) {//文件不存在执行下面的
                    fs.mkdirSync(path.join(root, pre, folder));
                } 
                pre = path.join(pre, folder);
            })
        callback  && callback(null);
    } catch (error) {
        callback  && callback(error); 
    }

}
module.exports = mkdirs;





// Module {
//   id: 'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\\modules\
// \mkdirs.js',
//   exports: [Function: mkdirs],
//   parent:
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: 'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\
// \03.js',
//      loaded: false,
//      children: [ [Circular] ],
//      paths:
//       [ 'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\\node_m
// odules',
//         'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\node_modules
// ',
//         'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\node_modules',
//         'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node_modules',
//         'C:\\Users\\wWX419246\\Documents\\node_modules',
//         'C:\\Users\\wWX419246\\node_modules',
//         'C:\\Users\\node_modules',
//         'C:\\node_modules' ] },
//   filename: 'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\\mo
// dules\\mkdirs.js',
//   loaded: true,
//   children: [],
//   paths:
//    [ 'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\\modules\\
// node_modules',
//      'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\code\\node_modu
// les',
//      'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\day04\\node_modules',
//      'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node\\node_modules',
//      'C:\\Users\\wWX419246\\Documents\\nodejsStudy\\node_modules',
//      'C:\\Users\\wWX419246\\Documents\\node_modules',
//      'C:\\Users\\wWX419246\\node_modules',
//      'C:\\Users\\node_modules',
//      'C:\\node_modules' ] }
