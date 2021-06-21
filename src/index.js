const fastify = require('fastify');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const authentication = require('./plugins/authentication')

//initialized Fastify App
const app = fastify({
    logger: {
        prettyPrint: {
            translateTime: 'SYS:dd-mm-yyyy hh:MM:ss',
            colorize: true,
        }
    }
});
authentication(app)

//connected fastify to mongoose
try {
    mongoose.connect('mongodb://localhost:27017/notes_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
} catch (e) {
    console.error(e);
}


userRoutes(app)
app.addHook('preHandler', function (req, reply, next) {
    if (req.body && req.url !== '/login') {
        req.log.info({ body: req.body }, 'parsed body')
    }
    next()
})
//handle root route

productRoutes(app)
transactionRoutes(app)

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});