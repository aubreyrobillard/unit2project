const mongoose = require('./connection');

const userSchema = new mongoose.Schema ({
    lastName: {
        type: String, 
        required: true
    },
    firstName: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('user', userSchema);






module.exports = UserModel;