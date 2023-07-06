// DEPORT DEPENDENCIES
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

// EXPRESS APPLICATION
const app = express();

// MIDDLEWARE
app.use(morgan('dev')); //logging
app.use(methodOverride('_method')); //override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); //serve static files from public folder


// ROUTES
app.get('/', (req, res) => {
    res.send('hola world')
})


// LISTENER
PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`LISTENING ON PORT ${PORT}`)
})