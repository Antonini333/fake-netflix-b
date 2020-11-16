const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    require('dotenv').config();
    const uri = process.env.uri || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x3nrp.mongodb.net/fakeNetflix?retryWrites=true&w=majority`;

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }).then(() => {
            console.log('CONNECTION TO mDB ESTABLISHED');
        })
        .catch(error => console.log('Error connecting to the dB' + error));
    
}
module.exports = dbconnect;