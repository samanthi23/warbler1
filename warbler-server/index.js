const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8081;
// set up some modules, set the PORT number and created a very simple error handler

app.use(cors())
app.use(bodyParser.json()) 

// going to specify all my routes over here 
// if none of those routes are reached 
// then run this function

app.use(function(req, res, next) {
    let err = new Error("Not Found ")
    err.status = 404;
    next(err);
});

app.listen(PORT, function() {
    // using a lot of ES2015 in this application
    console.log(`Server is starting on port ${PORT}`);
} );