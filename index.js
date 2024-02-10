const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('lamaan Saeed')
});

server.listen(4000);

//whenever the request is send to localhost:4000 while 
// we have run the programme in out terminal by the 
// command node filename.js 
// the we will get to see what is consoled , for now here
//- it is my name ;