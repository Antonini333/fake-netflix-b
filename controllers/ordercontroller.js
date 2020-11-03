const OrderModel = require('../models/Order');
const MovieModel = require('../models/Movie');
const UserModel = require('../models/User');


const OrderController = {
    async rent (req,res) {
        let user = await UserModel.findOne({
           _id: req.body._id
        })
        let movie = await MovieModel.findOne({
            id: req.body.id
        });
        try {
            const order = await OrderModel({
                userId: user,
                movieId: movie,
            }).save();
                res.status(201).send(order);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error,
            message: 'There was a problem trying to register the order.'
        })
    }
    }
    



}


module.exports = OrderController;