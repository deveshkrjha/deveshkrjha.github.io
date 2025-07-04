import http from 'http';

const server=http.createServer((req,res)=>{
    res.end("Response received...");
});

server.listen(8080,()=>{
    console.log("Server started");
});