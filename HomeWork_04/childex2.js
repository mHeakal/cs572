const fs = require("fs");
const path = require("path");
const url = require("url");

const readFile = ()=>{
    const data = fs.readFileSync(path.join(__dirname, './file.txt'), 'utf8');
    return data; 
};
process.on("message", (msg)=>{
    const data = readFile();
    process.send(data);
});