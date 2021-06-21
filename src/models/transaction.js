const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        capitalPrice: Number,
        dealPrice: Number
    }],
    transactionType: String,
    paymentType: String,
    profit: Number,
}, {
    timestamps: new Date()
});


const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction