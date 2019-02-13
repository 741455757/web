// 导入http模块
const http = require('http');
const urlModule = require('url');

// 创建一个http服务器
const server =  http.createServer();
// 监听http request请求
server.on('request', function(req, res) {
    // const url = req.url;
    const {pathname: url, query} = urlModule.parse(req.url, true);
    
    if(url === '/getscript') {
        // 拼接一个合法的js脚本，这里拼接的是一个方法的调用
        // var scriptStr = 'show()';
        var data = {
            name: 'xjj',
            age: 18,
            gender: '女孩子'
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
        // res.end发送给客户端，客户端去把这个字符串，当做js代码去解析执行
        res.end(scriptStr);
    }else {
        res.end('404');
    }
})

// 指定端口号，并启动服务器监听
server.listen(3000, function(){
    console.log('server listen at http://127.0.0.1:3000');
})