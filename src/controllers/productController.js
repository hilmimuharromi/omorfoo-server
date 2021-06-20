const Product = require('../models/product')

const addProduct = (req, reply) => {
    reply.code(201).send(req.body)

}

module.exports = {
    addProduct
}