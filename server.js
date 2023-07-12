// DEPORT DEPENDENCIES
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('./models/connection');
const RestaurantRouter = require('./controllers/restaurantRoutes');
const methodOverride = require('method-override');

// EXPRESS APPLICATION
const app = express();

// MIDDLEWARE
app.use(morgan('dev')); //logging
app.use(methodOverride('_method')); //override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); //serve static files from public folder
app.use(express.urlencoded({extended:true})) //this is how you gain access to req.body

app.use('/restaurants', RestaurantRouter);


// LISTENER
PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`LISTENING ON PORT ${PORT}`)
})