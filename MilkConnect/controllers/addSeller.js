const sellerModel = require('../models/seller');

exports.addSeller = async (req,res)=>{
    try{
        // res.send("Welcome");
        // Fetch Data
        let {sellerName,businessName,sellerArea,phnNumber,sellerMail} = req.body;
        // Check if same product with same price exist with same seller
        let existingSeller = await sellerModel.findOne({sellerMail});
        // If user exist throw error
        if(existingSeller){
            return res.status(400).json({
                success:false,
                message:"Seller exists already with this mail",
            })
        }
        await sellerModel.create({
            sellerName,businessName,sellerArea,phnNumber,sellerMail
        })
        const sellers = await sellerModel.find({});
        res.render('allSeller',{sellers,title:'All Sellers'});
    }
    catch(err){
        console.log(err);
        res.send("Something went wrong while adding seller");
    }
}


exports.allSeller = async (req,res) => {
    try{
        const sellerData = await sellerModel.find();
        if(!sellerData){
            return res.status(400).json({
                success: false,
                message:"Data is empty",
            })
        }
        res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:sellerData,
        })
    }
    catch(err){
        console.log("Errorr" , err);
    }
}


exports.deleteSeller = async (req,res) =>{
    try{
        let {sellerName,sellerMail} = req.params;
        let seller = await sellerModel.findOne({sellerName,sellerMail});
        if(!seller){
            return res.status(200).json({
                success:false,
                message:"No Seller found",
            })
        }
        await sellerModel.findOneAndDelete({_id:seller._id});
        res.status(200).json({
            success:true,
            message:"Deleted successfully",
        })
    }
    catch(err){

    }
}



exports.updateSeller = async (req,res)=>{
    try{
        // Fetch name and mail
        const {sellerName,sellerMail} = req.params;
        const seller = await sellerModel.findOne({sellerName,sellerMail});
        if(!seller) {
            return res.status(200).json({
                success:false,
                message:"No Seller found",
            })
        }
        const {newName,newMail} = req.body;
        await sellerModel.findOneAndUpdate({_id:seller._id},{sellerName:newName,sellerMail:newMail},{new:true});
        res.status(200).json({
            success:true,
            message:" Seller updated successfully",
        })
    }
    catch(err){

    }
}
