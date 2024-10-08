const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors  = require("cors")



const error = require('./middleware/error')
// routers
const productsRouter  = require("./router/transactionRouter")
const connectTODatabase = require('./config/dataBase')

const app = express()

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/config.env" });
  }
 
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

 

//connection to the database 
connectTODatabase()


app.get("/",(req,res)=>{
    res.send("Connection OK")
})
 
app.use("/api/v1", productsRouter)
 

 
 app.use(error)
module.exports = app
