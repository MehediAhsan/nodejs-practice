// dependencies
const { homeHandler } = require('./handleRoutes/homeHandler');
const {userHandler} = require('./handleRoutes/userHandler');

const routes = {
    home: homeHandler,
    user: userHandler
};

module.exports = routes;