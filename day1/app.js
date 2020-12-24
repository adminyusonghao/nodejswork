var http = require('http');

var fs  = require('fs');

const url  = require('url');

const querystring = require('querystring');

var server = http.createServer(function(request, response){

    var temp = url.parse(request.url,true);
    console.log(`姓名：${temp.query.name} --- 年龄: ${temp.query.age}`);
    var filepath = "";
    if(temp.pathname== '/index'){
        response.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        filepath = './index.html'
    }else if(temp.pathname== '/index.css'){
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
