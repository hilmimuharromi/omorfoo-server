const { addProduct, getProducts, getProductbyQuery, updateProduct, deleteProduct } = require('../controllers/productController')
module.exports = (app) => {
    app.post('/product', {
        preValidation: app.authenticate
    }, addProduct);
    app.get('/product', {
        preValidation: [app.authenticate]
    }, getProducts);
    app.get('/product/:params', getProductbyQuery);
    app.put('/product/:id', updateProduct)
    app.delete('/product/:id', deleteProduct)
}
