const fs = require('fs');
const http = require('http');

const readstream = fs.createReadStream('data.txt','utf-8')
const writestream = fs.createWriteStream('output.txt')

readstream.on('data', (chunk) => {
    console.log(chunk);
    writestream.write(chunk);
})

// readstream.pipe(writestream);

const server = http.createServer((req, res) => {
    const readData = fs.createReadStream('data.txt','utf-8')
    readData.pipe(res)
})


server.listen(5000)

console.log('server is running port 5000');