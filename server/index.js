const http = require("http");
const url = require("url")
const { error, time } = require("console");

const myServer = http.createServer((request,response)=>{
    
    const address = request.url;
    const q = url.parse(address,true);
    console.log(q);

    switch (q.pathname) {
        case "/":
            
            response.writeHead(200,"Ok");
            response.write("Hello This is our Home page");
           
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

        case "/blogs":
            const {year,title} = q.query
            response.writeHead(200,"Ok");
            if(year==2017){
                response.write("data found");
            }
            else if(year==2013 || title== 'avenger'){
                response.write(`data found ${title}`)
            }
            else{
                response.write("no data found");
            }
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