/*
 * Name : Create a raw node app
*/

// dependencies
const server = require('./crudlib/server');
// const workers = require('./crudlib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    // workers.init();
};

app.init();

// export the app
module.exports = app;