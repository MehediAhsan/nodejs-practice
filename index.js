/*
 * Name : Create a raw node app
*/

// dependencies
const http = require('http');
const { serverResponse } = require('./handleServer/serverResponse');
const environment = require('./handleServer/environments');

// app object (module scaffolding)
const app = {};

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