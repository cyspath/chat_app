var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type' : 'text/html'});
  response.write("this is a test \n")

  setTimeout(function() {
    response.end("and now we are done")
  }, 2000);
  // response.end("HELOO MOTO");
})

server.listen(8000); //listening on localhost port8000


console.log("Server is running http://127.0.0.1:8000/");
