const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    const uri = process.env.uri || "mongodb+srv: ";

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('CONNECTION TO mDB ESTABLISHED');
        })
        .catch(error => c