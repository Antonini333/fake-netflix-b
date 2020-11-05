const jwt = require ('jsonwebtoken');
const UserModel = require('../models/User');

const auth = async(req,res,next) => {
    try{
      const token = req.header('Authorization').replace('Bearer ', '');
      jwt.verify(token,'mymotherpetsme');
      const user = await UserModel.findOne({token:token});
      console.log(user)
      if(!user){
        return res.status(401).send({message: 'You got no token.'})
      }
      req.user = user;
      next();
    } catch (error){
      console.error(error)
      res.status(401).send({error, message: 'Something went wrong in the authentification process.'})
    }
  }
  
  module.exports = auth;