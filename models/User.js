const mongoose = require('mongoose');
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
        type: String
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
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    }
});

UserSchema.virtual('token').get(function (){
    const user = this;
    return{
        token: user._id
    }
})

UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.__v;
    return user;
};

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;


