const admin = async(req,res,next) => {
    try{

      if(req.user.role !== "admin"){
        return res.status(401).send({message: 'You must be an admin.'})
      }

      next();
    } catch (error){
      console.error(error)
      res.status(401).send({error, message: 'Check out your role, must be admin or user.'})
    }
  }
  
  module.exports = admin;