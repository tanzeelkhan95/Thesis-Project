const express = require('express')

const { route } = require('express/lib/application')

const routes = express.Router()

routes.get("/", (req,res) => {
    res.render("index")
})

routes.get('/product',(req,res)=>{
    res.render("product")
})

module.exports = routes