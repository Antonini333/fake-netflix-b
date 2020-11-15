const express = require('express');
const app = express();
const cors = require('./middleware/cors');



//Middleware
app.use(express.json());
// app.use(cors);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});
app.use(express.json());


//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();


//port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running on port ' + PORT));


app.options('/*', (req, res) => res.send());

// Routes
app.use(require("./routes/movierouter"));
app.use(require("./routes/userrouter"));
app.use(require("./routes/orderrouter"));



