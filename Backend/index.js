const express = require("express")
const app = express()
const DBconnection = require("./cofig/database")
const registerUser = require("./view/userRoute")
const login = require("./view/userRoute")
const logout = require("./view/userRoute")
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config()
// middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // allow credentials (cookies) to be sent
  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", registerUser);
app.use("/api/v1",login)
app.use("/api/v1",logout)

app.listen(process.env.PORT,()=>{
    console.log(`App listen on Port Number ${process.env.PORT}`)
})
DBconnection()