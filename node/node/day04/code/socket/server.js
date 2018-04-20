// 建立一个socket服务端

const net = require('net');
// 当客户端与我连接的时候出发

var server = net.createServer((socket) => {
    // var client = socket.address();//与当前服务连接的客户端的IP地址 实际打印的是服务端地址
    // console.log(client.address + "connection...");//::ffff:127.0.0.1
    // console.log(`${socket.remoteAddress}:${socket.remotePort}connection`);
    // socket.write(`hello${socket.remoteAddress}:${socket.remotePort}你来了`);
    // 监听socket有数据传过来
     socket.on('data', (chunk) => {
        console.log(chunk.toString());
        socket.write('server> 你说啥');
    });
})

var port=8080;
// 监听特定的接口
server.listen(port, (err) => {
    //成功监听port端口后执行 如果监听失败(端口被占用)会有err
    if(err) {
        console.log("端口被占用");
        return false;
    }
    console.log(`服务端正常监听${port}端口`);
})