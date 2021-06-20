const fastify = require('fastify');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

//initialized Fastify App
const app = fastify();
app.register(require('fastify-jwt'), {
    secret: 'supersecret'
})

//connected fastify to mongoose
try {
    mongoose.connect('mongodb://localhost:27017/notes_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
} catch (e) {
    console.error(e);
}

//handle root route
userRoutes(app)
productRoutes(app)

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});