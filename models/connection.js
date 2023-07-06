// import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// get database uri
const DATABASE_URL = process.env.DATABASE_URL;

//connect to mongo
mongoose.connect(DATABASE_URL)

//connection events
mongoose.connection
    .on('open', () => console.log('connected to mongo'))
    .on('close', () => console.log('not connected to mongo'))
    .on('error', (error) => console.log(error))



    module.exports = mongoose;