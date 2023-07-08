const mongoose = require('./connection');

const restaurantSchema = new mongoose.Schema ({
    name: String,
    priceRange: Boolean,
    restaurantLink: String,
    dishes: String,
    drinks: String,
    notes: String
});

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);

module.exports = RestaurantModel;

