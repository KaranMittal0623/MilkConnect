const mongooose = require('mongoose');

const cartSchemaFront = mongooose.Schema({
    productId:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    }
})

module.exports = mongooose.model("cartModelFront",cartSchemaFront);