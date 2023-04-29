// const {add} = require('./add');

// console.log(add(2,3));

const http = require('http');
const url = require('url');
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        // res.writeHead(200,{'content-type':'text/html'})
        // res.write('<p>Hi vai</p>')

        fs.readFile('data.txt',(err, data) => {
            if(err){
                res.write('Faile');
                res.end()
            }
            else{
                res.write(data)
                res.end()
            }
        })

        fs.writeFile('data.txt', 'How are you!', err => {
            if(err){
                res.write()
            }
        })


        // res.end()
    }

    else if(req.url == '/product'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({id:1,name:'watch',price:20}))
    }

    // const address = 'http://localhost:5000/product?name=mehedi&roll=2501'

    // const parsed_add = url.parse(address,true)
    // console.log(parsed_add.query)
});

fs.createReadStream()

const port = 5000;
server.listen(port);

console.log(`server running at ${port}`);