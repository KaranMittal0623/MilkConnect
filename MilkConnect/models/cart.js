const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    productArray:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true,
    },
    productQuantity:{
        type:[Number],
        required:true,
    }
})

module.exports = mongoose.model("Cart",cartSchema);