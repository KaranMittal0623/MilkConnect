const productModel = require('../models/products');
const cartModelFront = require('../models/frontCart');



exports.addToCart = async(req,res)=>{
    try {
        const {productId} = req.body;
        const product =  await productModel.findOne({productId});
        // console.log(product);
        if(!product){
            return res.status(400).json({
                success:false,
                message:"Product not found"
            })
        }
        const cart = await cartModelFront.findOne({productId});
        // console.log(cart);
        if(cart){
            cart.quantity += 1;
            cart.totalPrice = product.price * cart.quantity;
            await cart.save();
            return res.status(200).json({
                success:true,
                // message:"Product quantity updated",
                cart
            })
        }
        // console.log(cart);
        const newCart = new cartModelFront({
            productId:productId,
            quantity:1,
            totalPrice:product.price
        });
        await newCart.save();

        // console.log(newCart);
        return res.status(200).json({
            success:true,
            // message:"Product added to cart",
            cart:newCart
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}



exports.removeFromCart = async(req,res)=>{
    try {
        const {productId} = req.body;
        const product =  await productModel.findOne({productId});
        // console.log(product);
        if(!product){
            return res.status(400).json({
                success:false,
                message:"Product not found"
            })
        }
        const cart = await cartModelFront.findOne({productId});
        // console.log(cart);
        if(cart){
            cart.quantity -= 1;
            cart.totalPrice = product.price * cart.quantity;
            if(cart.quantity <= 0){
                await cartModelFront.deleteOne({productId});
            }
            await cart.save();
            return res.status(200).json({
                success:true,
                // message:"Product quantity updated",
                cart
            })
        }
        // console.log(cart);
        // console.log(newCart);
        return res.status(200).json({
            success:false,
            // message:"Product added to cart",
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}



exports.showCart = async(req,res)=>{
    try {
        const cart = await cartModelFront.find();
        if(!cart){
            return res.status(400).json({
                success:false,
                message:"Cart not found"
            })
        }
        res.render('cart', {cartItems: cart});
        // return res.status(200).json({
        //     success:true,
        //     cart
        // })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}