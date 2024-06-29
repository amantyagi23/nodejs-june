const http = require("http");


http.createServer(function (req,resp){
    console.log("I am in server ",req)
    resp.writeHead(404);
    resp.write("Welcome to first server page");
    resp.end();
}).listen(4500);


