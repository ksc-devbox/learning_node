var http = require("http");
var server = http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello World\n");
});

server.listen(9995);
console.log('sever test');
// 서버 객체 중에 close([callback]) 있기 서버를 정지 시킬 수 있다.
server.close(function(){ console.log('close');});
