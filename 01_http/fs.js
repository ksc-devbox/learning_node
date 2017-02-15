var http = require("http"),
  url = require('url'),
  fs = require('fs');

// 서버
http.createServer(function (request, response){
  var path = url.parse(request.url).pathname;

  if (path == '/'){
    //파일을 읽습니다.
    fs.readFile('hello.html', function (err,data) {
      // read error
      if (err){
        console.log(err);
        // HTTP Status Code: 404 NOT FOUND
        response.writeHead(404, {'Content-Type': 'text/html'});
      }
      // read file
      else {
        // HTTP Status Code: 200 OK
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data.toString());
      }
      response.end();
    });
  }
  else{
    response.write('Another Page');
    response.end();
  }
}).listen(9995);
console.log('start sever');
