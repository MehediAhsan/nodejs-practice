/*
 * Name : Create a raw node app
*/

// dependencies
const http = require('http');
const { serverResponse } = require('./handleServer/serverResponse');
const environment = require('./handleServer/environments');
const data = require('./crudlib/crudData');

// app object (module scaffolding)
const app = {};

// testing insert or create data

data.create('product','newProduct',{name:'Phone' , price:'20'}, (err) => {
    console.log('The err', err)
});

// create server
app.createServer = () => {
    const server = http.createServer(app.serverResponse);
    server.listen(environment.port, () => {
        console.log(`Server running on port ${environment.port}`);
    });
};

// handle Request Response
app.serverResponse = serverResponse;

// start server
app.createServer();