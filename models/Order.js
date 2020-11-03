const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    movieId: {
        type: Number,
        required: true
    },
    rentalDate: {
        type: Date
    },
    rentalEndDate: {
        type: Date
    },
    rentalState: {
        type: String,
        enum: ["rented", "available"],
        default: "rented"
    
    }
});

OrderSchema.methods.toJSON = function () {
    const order = this.toObject();
    delete order.__v;
    return order;
};

const OrderModel = mongoose.model('order', MovieSchema);

module.exports = OrderModel;
