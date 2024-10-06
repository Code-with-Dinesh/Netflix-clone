const express = require("express")
const app = express()
const DBconnection = require("./cofig/database")
const registerUser = require("./view/userRoute")
require('dotenv').config()
// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1",registerUser)

app.listen(process.env.PORT,()=>{
    console.log(`App listen on Port Number ${process.env.PORT}`)
})
DBconnection()