const mongoose = require("mongoose");

const CartData = mongoose.Schema({
    productString:{
        type:[String],
        required:true
    },
    allQuantity:{
        type:String,
        required:true
    },
    totalcartcost:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('cart-data', CartData);