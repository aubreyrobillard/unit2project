const mongoose = require('./connection');

const restaurantSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    cuisine: String,
    priceRange: Number,
    restaurantLink: String,
    dishes: String,
    drinks: String,
    notes: String,
    username: String,
});

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);






module.exports = RestaurantModel;