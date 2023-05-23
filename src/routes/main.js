const express = require('express')

const { route } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require('../models/Slider')

const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    const slider = await Slider.find()
    // console.log(details)
    res.render("index",{
        details:details,
        slides:slider,
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