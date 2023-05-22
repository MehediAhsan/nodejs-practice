// dependencies
const { homeHandler } = require('./handleRoutes/homeHandler');
const {userHandler} = require('./handleRoutes/userHandler');
const {tokenHandler} = require('./handleRoutes/tokenHandler');

const routes = {
    home: homeHandler,
    user: userHandler,
    token: tokenHandler
};

module.exports = routes;