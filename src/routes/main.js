const express = require('express')

const { route } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require('../models/Slider')
const Product = require('../models/Product')

const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    const slider = await Slider.find()
    const products = await Product.find()
    // console.log(details)
    res.render("index",{
        details:details,
        slides:slider,
        products:products,
    })
})

routes.get('/product', async(req,res)=>{
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    res.render("product", {
        details:details
    })
})

routes.get('/cart', async(req,res)=>{
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    res.render("cart",{
        details:details
    })
})

routes.get('/login', async(req,res)=>{
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    res.render("login",{
        details:details
    })
})

module.exports = routes