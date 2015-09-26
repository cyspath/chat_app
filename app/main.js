var http = require('http'), // createServer to specify callback func when any kind of http request is sent to our server
    fs = require('fs'); // this is used for reading contents of client.html form filesystem

var app = http.createServer(function (request, response) {
  fs.readFile("client.html", 'utf-8', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });

}).listen(2428) // 2428 = chat =)


var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) { // will fire everytime a client socket connects to the servers socket.io module
  socket.on('message_to_server', function(data) {
    io.sockets.emit("message_to_client", { message: data["message"]});
  })
})
