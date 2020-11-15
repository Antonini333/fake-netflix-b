
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({

    userId: {
        type: Schema.Types.ObjectId, ref: 'user',
        required: true
    },
    movieId: {
        type: Schema.Types.ObjectId, ref: 'movie',
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

OrderSchema.post("find",async function(docs){
    for (let doc of docs) {
        await doc.populate("userId").execPopulate();
        await doc.populate("movieId").execPopulate();
    
    }
})

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;
