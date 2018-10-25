// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.listen(3000);
// const Server = require('ws').Server;
// const ws = new Server({port:9999});
// ws.on('connection',function(socket){
// 	socket.on('message',function(msg){
// 		console.log(msg);
// 		// 客户端发来的信息
// 		// 服务器发给客户端的信息
// 		socket.send(`服务器对浏览器说：${msg}`);
// 	})
// })

const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(__dirname));
// 监听3000端口
app.listen(3000);
// =============================================
// 开始创建一个websocket服务
const Server = require('ws').Server;
// 这里是设置服务器的端口号，和上面的3000端口不用一致
const ws = new Server({ port: 9999 });
console.log('dd')
// 监听服务端和客户端的连接情况
ws.on('connection', function(socket) {
	console.log('sss')
    // 监听客户端发来的消息
    socket.on('message', function(msg) {
        console.log(msg);   // 这个就是客户端发来的消息
        // 来而不往非礼也，服务端也可以发消息给客户端
        socket.send(`这里是服务端对你说的话： sssss我给你的浏览器`);
    });
});



