const mongooose = require('mongoose');

const prodSchema = mongooose.Schema({
    proName : {
        type: String,
        required:true,
    },
    proPrice : {
        type: Number,
        required:true,
    },
    expDate : {
        type: Date,
    },
    addDate : {
        type:Date,
        default:Date.now,
    }
})

module.exports = mongooose.model("productInfo",prodSchema);