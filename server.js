const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('frontend'));

/*
app.get("/", (req, res) => {
  res.sendFile(__frontendDir + "/index.html");
})
*/

io.on('connection', (socket) => {
  console.log('ユーザーが接続しました。');

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(8000, () => {
  console.log('listening on 8000');
});
