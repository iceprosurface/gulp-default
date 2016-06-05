const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建一个简单的http服务
const server = http.createServer((request, response) => {

	// 解析请求，包括文件名
   // var pathname = url.parse(request.url).pathname;
   
   // // 输出请求的文件名
   // console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   // fs.readFile(pathname.substr(1), function (err, data) {
   //    if (err) {
   //       console.log(err);
   //       // HTTP 状态码: 404 : NOT FOUND
   //       // Content Type: text/plain
   //       response.writeHead(404, {'Content-Type': 'text/html'});
   //    }else{	         
   //       // HTTP 状态码: 200 : OK
   //       // Content Type: text/plain
   //       response.writeHead(200, {'Content-Type': 'text/html'});	
         
   //       // 响应文件内容
   //       response.write(data.toString());		
   //    }
   //    //  发送响应数据
   //    response.end();
   // });
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   response.end('hello world\n');
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

// 终端打印如下信息
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');