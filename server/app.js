const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('a user is connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
  });

  // // when the client emits 'add user', this listens and executes
  // socket.on('add user', (username) => {
  //   // we store the username in the socket session for this client
  //   socket.username = username;
  // });

});

http.listen(8080, console.log('listening on port 8080'))
