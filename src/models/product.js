const mongoose = require('mongoose')
const { hashPassword } = require('../helpers/hash')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productCode: {
        type: String,
        required: true,
    },
    stock: Number,
    minimalStock: Number,
    price: Number,
    purchasePrice: Number,
    brand: String,
    type: String
});


const product = mongoose.model("product", productSchema);
module.exports = product