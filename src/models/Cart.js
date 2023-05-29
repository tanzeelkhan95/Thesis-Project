const mongoose = require("mongoose")

const Cart = mongoose.Schema({
    quantity:String,
    productid:
    {
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('cart', Cart)
