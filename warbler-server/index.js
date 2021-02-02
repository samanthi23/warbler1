const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8081;

app.use(cors())
app.use(bodyParser.json()) 

// going to specify all my routes over here 
// if none of those routes are reached 
// then run this function

app.use(function(req, res, next) {
    
});