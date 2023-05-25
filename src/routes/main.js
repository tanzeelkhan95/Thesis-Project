const express = require('express')

const { route, render } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require('../models/Slider')
const Product = require('../models/Product')
const FeatureBox = require('../models/FeatureBox')
const FeaturedCategories = require('../models/FeaturedCategories')
const Register = require('../models/User')

const routes = express.Router()

routes.get("/", async (req,res) => {
    const details = await Detail.findOne({"_id":"646bafa2c087c0d9d56028b9"})
    const slider = await Slider.find()
    const products = await Product.find()
    const featurebox = await FeatureBox.find()
    const feateredcategories = await FeaturedCategories.find()
    // console.log(details)
    res.render("index",{
        details:details,
        slides:slider,
        products:products,
        featurebox:featurebox,
        featuredcategories:feateredcategories,
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
routes.post('/register', async (req, res) => {
    try {
      const registerUser = new Register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const registered = await registerUser.save();
      res.status(201).render("login")
    } catch (error) {
        console.error('Error registering user:', error); // Log the error to the console for debugging purposes
        res.status(500).send(`Error registering user: ${error.message}`);
    }
  });

module.exports = routes