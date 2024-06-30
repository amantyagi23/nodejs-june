const http = require("http");


const myServer = http.createServer((request,response)=>{
    
    const url = request.url;


    switch (url) {
        case "/":
            response.writeHead(200,"Ok");
            response.write("Hello This is over server page");
            break;
            
        case "/home":
            response.writeHead(200,"Ok");
            response.write("Hello This is over Home page");
            break;

        case "/contact_us":
            response.writeHead(200,"Ok");
            response.write("Contact Page");
            break;
        
        case "/about":
            response.writeHead(200,"Ok");
            response.write("About Page");
            break;

        default:
            response.writeHead(404,"Ok");
            response.write("Page Not Found");
            break;
    }
    response.end();
})



myServer.listen(5000,(error)=>{
    if(error){
        console.log("error occur",error);
    }
    else{
        console.log("Server Started");
    }
})