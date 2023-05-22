const express = require('express')

const { route } = require('express/lib/application')

const Detail = require("../models/Detail")

const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    // console.log(details)
    res.render("index",{
        details:details
    })
})

routes.get('/product', async(req,res)=>{
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    res.render("product", {
        details:details
    })
})

module.exports = routes