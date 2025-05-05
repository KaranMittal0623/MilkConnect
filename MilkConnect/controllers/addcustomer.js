const customerModel = require('../models/customer');

exports.addCustomer = async (req,res)=>{
    try{
        // Fetch Data
        let {customerName,userName,email} = req.body;
        // Check if same product with same price exist with same seller
        let existingCustomer = await customerModel.findOne({userName});
        // If user exist throw error
        if(existingCustomer){
            return res.status(400).json({
                success:false,
                message:"Seller exists already with this mail",
            })
        }
        await customerModel.create({
            customerName,userName,email
        })
        res.status(200).json({
            success:true,
            message:"Seller added successfully",
        })
    }
    catch(err){
        console.log(err);
    }
}