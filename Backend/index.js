const express = require("express")
const app = express()
const DBconnection = require("./cofig/database")
const registerUser = require("./view/userRoute")
const login = require("./view/userRoute")
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config()
// middlewares
app.use(cors())
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", registerUser);
app.use("/api/v1",login)

app.listen(process.env.PORT,()=>{
    console.log(`App listen on Port Number ${process.env.PORT}`)
})
DBconnection()