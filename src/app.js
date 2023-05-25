const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose")
const Product = require("./models/Product")
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const FeatureBox = require("./models/FeatureBox")
const FeaturedCategories = require('./models/FeaturedCategories')
const Register = require("./models/User")

const routes = require('./routes/main')
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/static', express.static("public"))
app.use('',routes)

//(template engine)

app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
mongoose.connect("mongodb://localhost/thesis_project",()=>{
    console.log("db connected")

    /*----------------- FEATURED CATEGORIES SCHEMA ----------------------- */

    // FeaturedCategories.create([
    //     {
    //         imageUrl: "/static/images/FEATURED 1.jpg"
    //     },
    //     {
    //         imageUrl: "/static/images/FEATURED 2.jpg"
    //     },
    //     {
    //         imageUrl: "/static/images/FEATURED 3.jpg"
    //     },
    // ])
    
    /*---------------- FEATURE BOX SCHEMA -------------*/

    // FeatureBox.create([
    //     {
    //         imageUrl:"/static/images/FEATURE 1.png",
    //         bold:"100% ORIGINAL ITEMS",
    //         para:"ARE AVAILABLE",
    //     },
    //     {
    //         imageUrl:"/static/images/FEATURE 2.png",
    //         bold:"RETURN WITH 7 DAYS",
    //         para:"OF RECIEVING YOUR ORDER",
    //     },
    //     {
    //         imageUrl:"/static/images/FEATURE 3.png",
    //         bold:"GET FREE DELIVERY",
    //         para:"ON ORDER WORTH $80",
    //     },
    //     {
    //         imageUrl:"/static/images/FEATURE 4.png",
    //         bold:"PAY ONLINE",
    //         para:"THROUGH MULTIPLE PAYMENT OPTION",
    //     }
    // ])

    /*------------------  CREATE SLIDER SCHEMA ----------------------- */

    // Slider.create([
    //     {
    //         title:"GET THE LOOK",
    //         subTitle:"SHOP OUR LATEST STYLES TODAY!",
    //         imageUrl:"/static/images/DISPLAY 1.jpg",
    //     },
    //     {
    //         title:"DON'T MISS OUT",
    //         subTitle:"LIMITED TIME ONLY SALE ITEMS",
    //         imageUrl:"/static/images/DISPLAY 2.jpg",
    //     },
    //     {
    //         title:"SHOP WITH PURPOSE",
    //         subTitle:"WITH OUR LATEST SUITS COLLECTION, STAND OUT FROM THE REST",
    //         imageUrl:"/static/images/DISPLAY 3.jpg",
    //     },
    //     {
    //         title:"GET THE LOOK",
    //         subTitle:"GET 30% OFF ON YOUR FIRST PURCHASE BY USING CODE: FIRST",
    //         imageUrl:"/static/images/DISPLAY 4.jpg",
    //     },
    // ])

/*---------------------- CREATE DETAIL SCHEMA --------------------*/

    // Detail.create({
    //     brandIconUrl:"/static/images/logo.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/index"
    //         },
    //         {
    //             label:"Product",
    //             url:"/product"
    //         },
    //         {
    //             label:"Cart",
    //             url:"/cart"
    //         },
    //         {
    //             label:"Login",
    //             url:"/login"
    //         }
    //     ]
    // })
})

app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})