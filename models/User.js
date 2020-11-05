const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({

    name: {
        type: String
    },
    surname: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    credit_card: {
        type: Number
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
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


