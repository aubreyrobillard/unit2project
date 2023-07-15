// DEPORT DEPENDENCIES //
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('./models/connection');
const RestaurantRouter = require('./controllers/restaurantRoutes');
const UserRouter = require('./controllers/userRoutes')
const methodOverride = require('method-override');
const session = require('express-session')
const MongoStore = require('connect-mongo');


// MIDDLEWARE //
app.use(morgan('dev')); //logging
app.use(methodOverride('_method')); //override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); //serve static files from public folder
app.use(express.urlencoded({extended:true})) //this is how you gain access to req.body
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
}))

app.use('/restaurants', RestaurantRouter);
app.use('/user', UserRouter);



// ROUTES //
app.get('/homepage', (req, res) => {
    res.render('homepage.ejs')
})


// LISTENER
PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`LISTENING ON PORT ${PORT}`)
})

