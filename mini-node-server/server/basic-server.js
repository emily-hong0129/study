const { log } = require('console');
const { on } = require('events');
const http = require('http');

// PORT번호
const PORT = 5000;
const ip = 'localhost';

/* 
  if( 메소드가 options  ){
    // CORS 설정을 돌려줘야한다.
  }
  if( 메소드가 POST고, url이 /upper/면 ){
    대문자로 응답을 돌려줘야한다
  }else if( 메소드가 POST고, url이 /lower/면 ){
    소문자로 응답을 돌려줘야한다
  }else{
    에러로 처리한다. bad request
  } 
*/

// 서버 생성
const server = http.createServer((request, response) => {
  const {method, url, header} = request;
  // 여기서의 request는 client에서 온 요청이다.

  if(method === "POST" && url === "/lower"){
    let body = [];  // 빈 문자열이나 빈배열로 설정해줄 수 있다
    
    // request.on함수로 data처리. chunk는 요청받은 데이터다
    request.on('data', (chunk) => { 
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      // 'body'에 전체 요청 바디가 문자열로 담겨있다.
      console.log('POST /lower 요청보냄');
      response.writeHead(200, defaultCorsHeader);
      response.end(body.toLowerCase())
      return;
    });
    
  }else if(method === "POST" && url === "/upper"){
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('POST /upper 요청보냄');
      response.writeHead(200, defaultCorsHeader);
      response.end(body.toUpperCase())
      return;
    });
  
  }else if(method === 'OPTIONS'){
    console.log('preflight request를 보냄');
    response.writeHead(200, defaultCorsHeader)
    response.end()
  
  }else{
    response.writeHead(404, defaultCorsHeader);
    response.end;
  }


  console.log(
    `http request method is ${request.method}, url is ${request.url}`
    );
    response.writeHead(200, defaultCorsHeader);
    response.end('hello mini-server sprints');
  });

  server.listen(5000);

  server.listen(PORT, ip, () => {
    console.log(`http server listen on ${ip}:${PORT}`);
  });

// CORS는 헤더에 들어가며 url을 받는데 있어 허용된 url인지 확인해주는 역할을 한다. 이를 통해 외부공격을 방지할 수 있다.
const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 86400
};
