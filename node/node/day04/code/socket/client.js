// 建立客户端 用来访问socket建立的服务
 
const net = require('net');
const client = net.connect({port: 8080}, () => {
  // 'connect' listener
  console.log('connected to server!');
//   client.write('world!\r\n');
    process.stdout.write('client>  ');
    process.stdin.on('data', (chunk) => {
        // 控制台输入回车触发
        // console.log(chunk.toString().trim());
        client.write(chunk.toString().trim());
        process.stdout.write('client>  ');
    });
    client.on('data', (data) => {
        console.log('\n'+data.toString());
        // client.end();
      });
});




// client.on('end', () => {
//   console.log('disconnected from server');
// });