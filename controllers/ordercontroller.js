const OrderModel = require('../models/Order');
const MovieModel = require('../models/Movie');
const UserModel = require('../models/User');
const dayjs = require ("dayjs");


const OrderController = {
    async rent(req, res) {

        let movie = await MovieModel.findOne({
            id: req.body.movieId
        })
        let endDate = dayjs().add(2, 'day')
        try {
            const order = await OrderModel({
                userId: req.user._id,
                movieId: movie._id,
                rentalDate: Date.now(),
                rentalEndDate: endDate
            }).save();
            res.status(201).send(order);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the order.'
            })
        }
    },
    async showAll(req, res) {
        try {
            const orders = await OrderModel.find()
            res.status(200).send(orders)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to retrive the orders.'
            })
        }
    },
    async showUser(req, res) {
        try {
            const userOrders = await OrderModel.find({
                userId: req.params.userId
            });
            res.status(201).send({
                userOrders
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to retrive the orders.'
            })
        }
    },
    async cancelOrder(req, res) {
        try {
            await OrderModel.findByIdAndDelete({
                _id: req.params._id
            });
            res.status(201).send({
                message: `El alquiler ha sido cancelado exitosamente`
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying cancel order.'
            })
        }
    },
    async extendOrder(req, res) {
        const order = await OrderModel.findById(req.body._id);
        const newRentalEnd = dayjs(order.rentalEndDate).add(req.body.days, 'day');
        
        

        try {
            await OrderModel.findOneAndUpdate({
                _id: req.body._id
            }, 
               {rentalEndDate: newRentalEnd} 
            , {
                new: true,
                useFindAndModify: false
            });
            res.status(200).send({
                message: 'Extend your order is Ok'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to extend your order'
            })

        }
    }


}


module.exports = OrderController;