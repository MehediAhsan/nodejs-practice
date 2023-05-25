// dependencies
const { homeHandler } = require('./handleRoutes/homeHandler');
const {userHandler} = require('./handleRoutes/userHandler');
const {tokenHandler} = require('./handleRoutes/tokenHandler');
const {checkHandler} = require('./handleRoutes/checkHandler');

const routes = {
    home: homeHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler
};

module.exports = routes;