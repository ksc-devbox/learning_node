/* nodejs */
var http = require("http");

//start server
http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello World\n");
}).listen(9995);

console.log('sever test');
