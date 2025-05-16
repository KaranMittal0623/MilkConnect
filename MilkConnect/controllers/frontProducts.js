const productModel = require('../models/products');

exports.showProduct = async (req, res)=>{
    const products = await productModel.find();
    if(!products){
        res.status(400).json({
            success:false,
            message:"No product found",
        })
    }
    // res.send("Welcome to the product page");
    // console.log(products);
    res.render('showProduct',{products,title:"All Products"});
}