const express = require("express")
const hbs = require("hbs")
const app = express()

const routes = require('./routes/main')

app.use('',routes)

//(template engine)

app.set('view engine', 'hbs')
app.set("views","views")


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})