const UserModel = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const UserController = {


    async getAll(req,res) { // role admin {SEARCH}
    try {
    const users = await UserModel.find();
    res.send(users);
} catch (error) {
    console.error(error);
    res.status(500).send({
        message: 'Something went wrong collecting users'
    })
}
},

    async Register(req, res){  // 
         try {
         const user = await UserModel.create(req.body);
         res.send({ user, message: 'User successfully created'});
        } catch (error){
            console.error(error);
            res.status(500).send({message: 'User already exists', error})
        }
    },
    

    async Login (req,res) {
        try{
        let user = await UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        });
        
        res.send({user, message: 'Login succesful'});
    } catch(error){
        console.error(error);
        res.status(401).send({message: 'Wrong Credentials', error})
    }
      
        },
    

    async Logout (req,res) {
        try {
            const email = { email: req.body.email 
            };
            const emptyToken = { token: ""
        };
        const user = await UserModel.findOneAndUpdate(email, emptyToken)
            res.send(`Bye ${user.name}, see you next time!`)
         
          } catch (error) {
            console.log(error)
            res.status(500).send({message: 'There was a problem trying to log out.'})
          }
    },


    async Delete(req,res) {
        try{
            const user = await UserModel.findByIdAndDelete(req.params._id);
            res.send({
                message: "User successfully deleted", user})
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Something went wrong deleting user",
                error
            })
        }
    }

}


module.exports = UserController;