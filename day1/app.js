var http = require('http');

var fs  = require('fs');


var server = http.createServer(function(request, response){

    const url = new URL(request.url,"http://127.0.0.1:8080/")
    console.log("href"+url.href;
    
    var filepath = "";
    if(request.url == '/index'){
        response.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        filepath = './index.html'
    }else if(request.url == '/index.css'){
        response.writeHead(200,{'Content-type':'text/css;charset=UTF-8'});
        filepath = './index.css'
    }else {
        response.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        filepath = './404.html'
    }

    fs.readFile(filepath, function(err, data){
        if (err){
            console.log("异常了")
            response.end('异常了');
        }else{
            //console.log(data.toString())
            response.end(data);
        }
        
    })
}).listen(8080);

