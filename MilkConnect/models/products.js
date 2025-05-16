const mongooose = require('mongoose');

const prodSchema = mongooose.Schema({
    productName : {
        type: String,
        required:true,
    },
    productPrice : {
        type: String,
        required:true,
    },
    expDate : {
        type: Date,
    },
    addDate : {
        type:Date,
        default:Date.now,
    },
    productId:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    }
})

module.exports = mongooose.model("productModel",prodSchema);