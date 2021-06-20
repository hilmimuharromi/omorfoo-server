const { Register, Login } = require('../controllers/userController')
module.exports = (app) => {
    app.post('/register', Register);
    app.post('/login', Login);
}