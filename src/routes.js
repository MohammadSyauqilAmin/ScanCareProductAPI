const {getProductByID} = require('./handler');
const routes = [
    {
    method: 'GET',
    path: '/products/{id}',
    handler: getProductByID
    },
];

module.exports = routes;


