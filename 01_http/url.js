var http = require("http"),
  url = require('url');

// 서버
http.createServer(function (request, response){
  // url parse 로 String url 값을 입력하면 Object 를 리턴해 줍니다.
  var path = url.parse(request.url).pathname;
  /*
    {
      href: 'http://localhost:9995/?test=123',
      pathname: '',
      search: '?test=123',
      query: 'test=123'
    }

    url.parse(url, true) 형식으로 호출하면 query 값은 object 형식을 리턴합니다.

    {
      href: 'http://localhost:9995/?test=123',
      pathname: '',
      search: '?test=123',
      query: {test : '123' }
    }
  */
  if (path == '/'){
    response.write('Hello Index');
  }
  else{
    response.write('Another Page');
  }

  response.end();
}).listen(9995);
console.log('sever test');
