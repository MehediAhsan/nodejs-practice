// dependencies
const http = require('http');
const { serverResponse } = require('../handleServer/serverResponse');
// const environment = require('../handleServer/environments');
// const data = require('./crudData');
// const { sendTwilioSms } = require('../handleServer/notifications');

// server object - module scaffolding
const server = {};

// configuration
server.config = {
    port: 3000,
};

// testing insert or create data
// data.create('product','newProduct',{name:'Phone' , price:'20'}, (err) => {
//     console.log('The err', err)
// });

// testing for read data
// data.read('product','newProduct', (err, data) => {
//     console.log(err,data);
// });

// testing update data
// data.update('product','newProduct',{name:'mobile' , price:'50'}, (err) => {
//     console.log('The err', err)
// });

// testing for delete data
// data.delete('product','newProduct', (err) => {
//     console.log(err);
// });

// checking notification

// sendTwilioSms('01929378419', 'Hello world', (err) => {
//     console.log(`this is the error`, err);
// });


// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.serverResponse);
    createServerVariable.listen(server.config.port, () => {
        console.log(`listening to port ${server.config.port}`);
    });
};

// handle Request Response
server.serverResponse = serverResponse;

// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;