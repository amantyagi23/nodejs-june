const url = require("url");

const address = 'http://brainmentors.com/default.html?year=2017';

const q = url.parse(address,true);


console.log(q.hostname)

console.log(q.query);
console.log(q.pathname)