const mongoose = require("mongoose")
require('dotenv').config()
const DBconnection  =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then((response)=>{
            console.log("Database connected Successfully")
        })
    } catch (error) {
        console.log("Error while DB connection ",error)
    }
   
}
module.exports = DBconnection