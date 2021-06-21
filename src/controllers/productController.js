const Product = require('../models/product')

const addProduct = async (req, reply) => {
    const { name, productCode, stock, minimalStock, price, purchasePrice, brand, type } = req.body
    try {
        const result = await Product.create({ name, productCode, stock, minimalStock, price, purchasePrice, brand, type })
        reply.code(201).send(result)
    } catch (error) {
        reply.code(400).send(error)
    }
}

const getProducts = async (req, reply) => {
    try {
        const result = await Product.find()
        reply.code(200).send(result)
    } catch (error) {
        reply.code(400).send(error)

    }
}

const getProductbyQuery = async (req, reply) => {
    try {
        const { name, productCode } = req.query
        let query = []
        if (name) {
            query.push({
                name: {
                    $regex: name
                }
            })
        } else if (productCode) {
            query.push({ productCode })
        }
        const result = await Product.find({
            $or: query
        })
        console.log(result)
        reply.code(200).send(result)
    } catch (error) {
        reply.code(400).send(error)
    }
}

const updateProduct = async (req, reply) => {
    const { id } = req.params
    try {
        const result = await Product.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
        reply.code(200).send(result)
    } catch (error) {
        reply.code(400).send(error)
    }
}

const deleteProduct = async (req, reply) => {
    const { id } = req.params
    try {
        const result = await Product.findOneAndDelete({ _id: id })
        reply.code(200).send(result)
    } catch (error) {
        reply.code(400).send(error)
    }
}

module.exports = {
    addProduct, getProducts, getProductbyQuery, updateProduct, deleteProduct
}