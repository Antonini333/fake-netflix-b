const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    idMovie: {
        type: Number,
        required: true
    },
    rentalDate: {
        type: Date
    },
    rentalState: {
        type: String,
        default: "rented"
    },
    price: {
        type: number
    },
});

const OrderModel = mongoose.model('order', MovieSchema);

module.exports = OrderModel;
