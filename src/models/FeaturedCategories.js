const mongoose = require("mongoose")
const FeaturedCategories =  mongoose.Schema({
    imageUrl:String,
});

module.exports = mongoose.model('feature-categories', FeaturedCategories);