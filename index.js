const express = require('express');
const app = express();
const cors = require('./middleware/cors');



//Middleware
app.use(express.json());
app.use(cors);


//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();


//port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running on port ' + PORT));


// Routes
app.use(require("./routes/movierouter"));
app.use(require("./routes/userrouter"));