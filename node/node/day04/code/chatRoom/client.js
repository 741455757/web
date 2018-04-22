// 建立客户端 用来访问socket建立的服务
 
const net = require('net');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
    name = name.trim();
    if(!name) {
        throw new Error("没名字");
    }
    // 创建于服务端socket连接
    var server = net.connect({port: 8080}, () => {
        console.log(`welcome ${name} to 8080 chatroom`);
        // 监听服务端发过来的数据
        server.on('data', (chunk) => {
            try {
                var signal = JSON.parse(chunk.toString());
                var proctocal = signal.proctocal;
                
                switch (proctocal) {
                    case 'broadcast':
                        console.log('\nbroadcast');
                        console.log(signal.from+'>');
                        console.log(signal.message);
                        break;
                    // case 'p2p':
                    //     p2p(signal);
                    // break;
                    // case 'shake':
                    //     shake(signal);
                    // break; 
                    default:
                        socket.write("弄啥呢！我干不了");
                        break;
                }
            } catch (error) {//json格式异常的话，会捕获异常
                server.write("弄啥呢！");
            }
        })
    })
    rl.setPrompt(name + '>');
    rl.prompt();

    rl.on('line', (line) => {
        var send = { 
            'proctocal': 'broadcast',
            'from': name,
            'message': line.toString().trim()
        } 
        server.write(JSON.stringify(send));
        console.log(line);
        // rl.setPrompt(name + '>');
        rl.prompt();
    }).on('close', () => {
    // console.log('Have a great day!');
    // process.exit(0);
    });
});




// client.on('end', () => {
//   console.log('disconnected from server');
// });