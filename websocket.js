import Message from './model/message';
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.WS_PORT || 3001 });  
const clients = {};  
  
wss.on('connection', function connection(ws) {  
    // 这里应该有一个身份验证步骤来设置 userId  
    // 但为了简化，我们假设每个客户端连接时都会发送一个用户名
    ws.on('message', function incoming(message) {  
        // 假设第一个消息是用户名，之后的消息是聊天内容  
        if (!ws.userId) {  
            const userId = message.toString(); // 假设用户名是第一个消息  
            ws.userId = userId;  
            clients[userId] = ws; // 将用户ID映射到WebSocket连接  
            // 可以发送确认消息给客户端，表明用户名已注册
            // Message.find({status: "send"}).then(data=>{
            //     ws.send(JSON.stringify(data));
            //     Message.updateMany({status: "send"}, {status: "receive"}).then(data=>{
            //         console.log(data);
            //     })
            // })
        } else {  
            // 转发消息给另一个用户（这里需要知道另一个用户的ID）  
            // 假设我们以某种方式知道了另一个用户的ID，存储在toUserId中  
            const messageObj = JSON.parse(message);
            let {from, to, content} = messageObj || {};
            if (!from || !to) return; 
            const toWs = clients[to];  
            let status = "send";
            if (toWs) {  
                toWs.send(message.toString()); 
                status = "receive";
            }
            // 存储聊天记录
            Message.create({from, to, content, status});
        }  
    });  
  
    ws.on('close', function clear() {  
        const userId = ws.userId;  
        if (userId) {  
            delete clients[userId]; // 从映射中删除已关闭的连接  
        }  
    });  
  
    ws.on('error', function error(err) {  
        console.error('WebSocket error:', err);  
    });  
});  