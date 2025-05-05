const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async (req,res) =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Database connected successfully")).catch((err)=>{
        console.log("Error",err);
    })
}



module.exports = connectDB;