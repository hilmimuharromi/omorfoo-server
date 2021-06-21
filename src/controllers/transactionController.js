const Transaction = require('../models/transaction')

const addTransaction = async (req, reply) => {
    const { items, transactionType, paymentType } = req.body
    const { accessToken } = req.headers
    console.log('user ====', req.user, 'userrrr')

    try {
        let profit = 0
        if (items.length > 0) {
            items.map((item) => {
                profit += item.dealPrice - item.capitalPrice
            })
        }
        const result = await Transaction.create({
            items, transactionType, paymentType, profit
        })
        reply.code(201).send(result)
    } catch (error) {
        reply.code(400).send(error)
    }

}

module.exports = {
    addTransaction
}