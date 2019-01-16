//using readFile
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'./big.txt'), 'utf8', (err, data)=>{
        if(err) throw err;
        res.writeHead(200,{'Contect-Type': 'text/plain'});
        res.end(data);
    });
    
}).listen(3000, ()=> console.log("Listening on Port 3000"));
