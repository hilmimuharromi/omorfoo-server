const { addProduct } = require('../controllers/productController')
module.exports = (app) => {
    app.post('/product', addProduct);
}
