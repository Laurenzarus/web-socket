let WebSocket = require('ws');

let wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

console.log("websocket code being run!");

var content = '';

wss.on('connection', (ws) => {

  ws.on('message', (message) => {
    console.log(`Received new content: ${message}`);
    // content = message;
    wss.clients.forEach((client) => {
      client.send(message);
    });

  });
});
