const mongoose = require('mongoose');

let customerModel = mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Customer",customerModel);