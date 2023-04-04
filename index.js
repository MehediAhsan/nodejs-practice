// const {add} = require('./add');

// console.log(add(2,3));

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<p>Hi vai</p>')
        res.end()
    }

    else if(req.url == '/product'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({id:1,name:'watch',price:20}))
    }

});
const port = 5000;
server.listen(port);

console.log(`server running at ${port}`);