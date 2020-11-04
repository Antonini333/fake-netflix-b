const checkadult = async(req,res,next) => {
    try{

      if(req.user.age <= 18){
        return res.status(401).send({message: 'You are underage for this content.'})
      }

      next();
    } catch (error){
      console.error(error)
      res.status(401).send({error, message: 'Something went wrong checking age of user.'})
    }
  }
  
  module.exports = checkadult;