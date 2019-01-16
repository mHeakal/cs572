//using readFileSync
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,'./big.txt'), 'utf8');
    res.writeHead(200,{'Contect-Type': 'text/plain'});
    res.end(data);
}).listen(3000, ()=> console.log("Listening on Port 3000"));
