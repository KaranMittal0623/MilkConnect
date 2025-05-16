const mongooose = require('mongoose');
// Require transporter
let {transporter} = require('../config/nodemailer'); 

const sellerSchema = mongooose.Schema({
    sellerName : {
        type: String,
        required:true,
    },
    businessName : {
        type: String,
        required:true,
    },
    sellerArea : {
        type: String,
        required:true,
    },
    phnNumber : {
        type:Number,
        required:true,
    },
    sellerMail : {
        type: String,
        required:true,
    }
})

// Post Route to awake
// sellerSchema.post("save",async (doc)=>{
//     console.log(doc);

//     let info = transporter.sendMail({
//         from:"karanmittal662@gmail.com",
//         to:doc.sellerMail,
//         subject:`Welcome to MilkConnect`,
//         html:`<h4>Dear ${doc.sellerName},</h4><p>Welcome to MilkConnect! Your bussiness {${doc.bussinessName}} has been registered with us. We are thrilled to have you join our community of dedicated sellers. Your commitment to providing quality products aligns perfectly with our mission to connect consumers with the best milk and dairy products available.</p><br><br><h3>Best Regards</h3><p>@MilkConnect Team</p>`,
//     })
// })


module.exports = mongooose.model("sellerInfo",sellerSchema);