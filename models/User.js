const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    credit_card: {
        type: Number,
        trim:true
    },
    token: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    userId: {
        type: String,
    }
});

UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.__v;
    delete user.password;
    return user;
};

UserSchema.pre('save', async function (next){
    try {

    const user = this;
    user.password = await bcrypt.hash(user.password, 9);
    next()
    } catch (error){
        console.error(error)
    }
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;


