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
    stock: {
        type: Number,
        required: true,
    },
    minimalStock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    capitalPrice: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
}, {
    timestamps: new Date()
});


const product = mongoose.model("product", productSchema);
module.exports = product