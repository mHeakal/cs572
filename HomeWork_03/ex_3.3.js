//using stream
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res)=>{
    fs.createReadStream(path.join(__dirname,'./big.txt')).pipe(res);
    
}).listen(3000, ()=> console.log("Listening on Port 3000"));