/*
 * Name : Create a raw node app
*/

// dependencies
const http = require('http');
const { serverResponse } = require('./handleServer/serverResponse');

// app object (module scaffolding)
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.serverResponse);
    server.listen(app.config.port, () => {
        console.log(`Server running on port ${app.config.port}`);
    });
};

// handle Request Response
app.serverResponse = serverResponse;

// start server
app.createServer();