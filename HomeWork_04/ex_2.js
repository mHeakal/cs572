const http = require("http");
const {fork} = require("child_process");
const server = http.createServer();

server.on("request",(req, res)=>{
if(req.url === "/"){
    res.end("Home page");

}else if(req.url === "/?url=file.txt"){
    const childProcess = fork("childex2.js");
    childProcess.send("start");
    childProcess.on("message", data =>{
        res.end(data);
    })
}else{
    res.writeHead(404);
    res.end();
}
}).listen(4000, ()=> console.log("Listening on Port 4000"));