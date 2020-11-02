const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    const uri = process.env.uri || "mongodb+srv://AdminMovies:Abc123@cluster0.x3nrp.mongodb.net/fakeNetflix?retryWrites=true&w=majority";

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('CONNECTION TO mDB ESTABLISHED');
        })
        .catch(error => console.log('Error connecting to the dB' + error));
    
}
module.exports = dbconnect;