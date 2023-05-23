const mongoose = require("mongoose")
const FeatureBox = mongoose.Schema({
    imageUrl:String,
    bold:String,
    para:String,
});

module.exports = mongoose.model('feature-box', FeatureBox)
