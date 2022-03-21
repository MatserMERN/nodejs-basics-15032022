const http = require('http')

// http.createServer(function(request, response){
//     response.writeHead(201, {'content-type': 'text/html'})
//     response.end("<h1>Welcome to NodeJS http module</h1>")
// }).listen(1234)

http.createServer(function(request, response){
    console.log(request.url)

    if(request.url == '/') {
        response.writeHead(201, {'content-type': 'text/html'})
        response.end("<h1>Welcome to NodeJS http module</h1>")
    } else if(request.url == '/user') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.end("<h1>Here is your user Data</h1>")
    } else if(request.url == '/employee') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.end("<h1>Here is your employee Data</h1>")
    } else {
        response.writeHead(400, {'content-type': 'text/html'})
        response.end("<h1>Please contact administrator</h1>")
    }

}).listen(1234)