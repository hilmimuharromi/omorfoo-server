const { addTransaction } = require('../controllers/transactionController')
module.exports = (app) => {
    app.post('/transaction', {
        preValidation: app.authenticate
    }, addTransaction);
}
