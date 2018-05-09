// 建立一个socket服务端

const net = require('net');

// 用于存储所有连接
var clients = [];
// 当客户端与我连接的时候出发
var server = net.createServer((socket) => {
    
    clients.push(socket);
    socket.on('data', (chunk) => {
        console.log(`welcome ${socket.remoteAddress} to 8080 chatroom`);
        function broadcast(signal){
            var from = signal.from;
            var message = signal.message;
            var send = {
                'proctocal': signal.proctocal,
                'from': from,
                'message': message
            }
            // 广播消息
            clients.forEach(client => {
                client.write(JSON.stringify(send));
            });  
        }
        function p2p(signal){
            var from = signal.from;
            var target =  signal.to;
            var message = signal.message;
            var send = {
                'proctocal': signal.proctocal,
                'from': from,
                'to': target,
                'message': message
            }
            // 点对点消息
            clients[target].write(JSON.stringify(send));
            
        }
    //   有任何客户端消息都会触发
        // chunk：'broadcast'|'张三'|'弄啥呢'
        // chunk: { 'proctocal': 'broadcast','username':'张三','message','弄啥呢'}
        // chunk: { 'proctocal': 'p2p','from':'张三','to':'李四','message','弄啥呢'} 点对点
        // var username = chunk.username;
        // var message = chunk.message;
        // broadcast(username,message); 拿到用户名和消息，通知所有客户端 广播消息
        try {
            var signal = JSON.parse(chunk.toString());
            var proctocal = signal.proctocal;
            
            switch (proctocal) {
                case 'broadcast':
                    broadcast(signal);
                    break;
                case 'p2p':
                    p2p(signal);
                break;
                // case 'shake':我来了
                //     shake(signal);
                // break;
                default:
                    socket.write("弄啥呢！我干不了");
                    break;
            }
        } catch (error) {//json格式异常的话，会捕获异常
            socket.write("弄啥呢！");
        }
       
    });
    socket.on('error', (err) =>{
        clients.splice(clients.indexOf(socket), 1);
        console.log(`${socket.remoteAddress}下线 在线人数${clients.length}`);
    })
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

