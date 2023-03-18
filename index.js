const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middlewares/logEvents");
const errorHandler = require("./middlewares/errorHandler");
//
const rootRoute = require('./routes/root')
const employeesRoute = require('./routes/api/employees')
//
const corsOptions = require('./config/corsOptions');

dotenv.config();
const port = process.env.PORT || 3333;


//middlewares logger
app.use(logger);

//  cross origin resource sharing 
app.use(cors(corsOptions));

//  handle urlencode from form data
app.use(express.urlencoded({ extended: false }));

//build in middleware for json
app.use(express.json());
//static file
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/logs', express.static(path.join(__dirname, '/logs')))


//route handlers
app.use('/', rootRoute)
app.use('/employees', employeesRoute)

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
})
app.use(errorHandler)

app.listen(port, () => {
    console.log("app listening on port " + port);

})