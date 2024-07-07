const os = require("os");

console.log("cpu architexture",os.arch())

console.log("free memmory",os.freemem(),"MB");

console.log("total memory",os.totalmem(),"MB");

// console.log("network interface",os.networkInterfaces());

console.log("Host name",os.hostname());
console.log("os",os.type());
console.log("os platform",os.platform())

console.log(os.uptime());