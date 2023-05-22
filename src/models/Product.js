const mongoose = require("mongoose")

const Product = mongoose.Schema({
    productName:String,
    imageName:String,
    price:String,
    category:String,
});

module.exports=mongoose.model("products", Product)