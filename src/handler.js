const products = require('./products');
import('nanoid');

const getProductByID = (request, h) => {
  const {id} = request.params;
  
  const product = products.filter((p) => p.id === id)[0];

  return product;
};

module.exports = {getProductByID};