const mongoose = require('mongoose')
const { hashPassword } = require('../helpers/hash')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    }
});

userSchema.pre("save", function () {
    const hashedPassword = hashPassword(this.password);
    this.password = hashedPassword;
});

const user = mongoose.model("user", userSchema);
module.exports = user