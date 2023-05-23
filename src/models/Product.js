const mongoose = require("mongoose")

const Product = mongoose.Schema({
    productName:String,
    imageName:String,
    price:String,
    category:String,
    salecheck:Boolean, //check if the product is on sale
    newcheck:Boolean,  //check if the product is of new arrival
});

module.exports=mongoose.model("products", Product)