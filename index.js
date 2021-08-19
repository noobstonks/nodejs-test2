//asynchronous

function onRequest(request, response) {

    function callback(error,data){
        if(error) {
            response.writeHead(404);
            response.write("file not found")
        }
        else {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(data)
        }
        response.end()
    }
    fs.readFile("./data.json", null, callback)
}

http.createServer(onRequest).listen(8000,function(){console.log("server nyala")})

//sychronous

const http = require('http');
const fs = require('fs')

 function onRequest(request, response) {
     const dataJson = fs.readFileSync("./data.json" , "utf-8")
     response.writeHead(200, {"Content-Type": "application/json"})
     response.write(dataJson)
     response.end();
 }

 http.createServer(onRequest).listen(3000, function(){console.log("server nyala")})