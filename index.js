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