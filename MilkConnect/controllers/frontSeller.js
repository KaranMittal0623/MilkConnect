const sellerModel = require('../models/seller');
const router = require('../routes/frontRoutes');

exports.readSeller = async (req,res)=>{
    try{
        const sellers =await sellerModel.find({});
        res.render('allSeller',{sellers,title:'All Sellers'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.updateSelect = async (req,res)=>{
    try{
       let {email} = req.body;
       let seller = await sellerModel.findOne({sellerMail:email});
       if(seller){
        res.render('updateDetails',{seller, title:'Update Seller', message:""});
       }
       else{
        res.render('updateDetails',{title:'Register Seller', seller, message:"Seller Not Found"});
       }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.deleteSeller = async(req,res)=>{
    try{
        let {email} =req.body;
        let user = await sellerModel.findOne({sellerMail:email});
        if(user){
            await sellerModel.deleteOne({sellerMail:email});
            const sellers =await sellerModel.find({});
            res.render('allSeller',{sellers,title:'All Sellers'});
        }
        else{
            res.send("User not found");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
}