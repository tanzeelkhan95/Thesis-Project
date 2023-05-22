const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose")
const Product = require("./models/Product")
const Detail = require("./models/Detail")

const routes = require('./routes/main')

app.use('/static', express.static("public"))
app.use('',routes)

//(template engine)

app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
mongoose.connect("mongodb://localhost/thesis_project",()=>{
    console.log("db connected")
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