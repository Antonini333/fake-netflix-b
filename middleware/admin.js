const UserModel = require('../models/User');
const jwt = require ('jsonwebtoken');

const admin = async(req,res,next) => {
    try{

      if(req.user.role !== "admin"){
        return res.status(401).send({message: 'You must be an admin.'})
      }

      next();
    } catch (error){
      console.error(error)
      res.status(401).send({error, message: 'ERROR.'})
    }
  }
  
  module.exports = admin;