const prodModel = require('../models/products');

exports.addProd = async (req,res)=>{
    try{
        // Fetch Data
        let {proName,proPrice,expDate,addDate} = req.body;
        // Check if same product with same price exist with same seller
        let existingProd = await prodModel.findOne({proName,proPrice});
        // If user exist throw error
        if(existingProd){
            return res.status(400).json({
                success:false,
                message:"Product exists already",
            })
        }
        await prodModel.create({
            proName,proPrice,expDate,addDate
        })
        res.status(200).json({
            success:true,
            message:"Product added successfully",
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.allProd = async (req,res) => {
    try{
        const prodData = await prodModel.find();
        if(!prodData){
            return res.status(400).json({
                success: false,
                message:"Data is empty",
            })
        }
        res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:prodData,
        })
    }
    catch(err){
        console.log("Errorr" , err);
    }
}


exports.updateProduct = async (req,res)=>{
    try{
        // Fetch name and mail
        const {proName,proPrice} = req.params;
        const product = await prodModel.findOne({proName,proPrice});
        if(!product) {
            return res.status(200).json({
                success:false,
                message:"No product found",
            })
        }
        const {newName,newPrice} = req.body;
        await prodModel.findOneAndUpdate({_id:product._id},{proName:newName,proPrice:newPrice},{new:true});
        res.status(200).json({
            success:true,
            message:"Updated successfully",
        })
    }
    catch(err){

    }
}


exports.deleteProduct = async (req,res) =>{
    try{
        let {proName,proPrice} = req.params;
        let product = await prodModel.findOne({proName,proPrice});
        if(!product){
            return res.status(200).json({
                success:false,
                message:"No product found",
            })
        }
        await prodModel.findOneAndDelete({_id:product._id});
        res.status(200).json({
            success:true,
            message:"Deleted successfully",
        })
    }
    catch(err){

    }
}