const appendurl = require('./module/index.js');
const apd = require('./module/index1.js');
console.log(apd);

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8'  });
    /* Exports 到处单一方法 */
    //var api = appendurl.appendu(request.url);

    /* Exports 导出对象 */
    //response.write(apd.ap.apd1(request.url));
    //response.write("<hr/>")
    //response.end(apd.ap.apd2(request.url));

    /* Mudole.exports 直接到处 */
    /* response.write(apd.apd1(request.url));
    response.write("<hr/>")
    response.end(apd.apd2(request.url)); */
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/ ');
