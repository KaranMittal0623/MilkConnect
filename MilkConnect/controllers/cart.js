const cartSchema = require('../models/cart');
const prodModel = require('../models/products');

exports.addToCart = async (req, res) => {
    try {
        let { userId, proName, proPrice } = req.body;
        // Check if product is available from database
        let product = await prodModel.findOne({ proName, proPrice });
        // Product available or not
        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Sorry, This product is not available",
            });
        }
        // If product exists, check if user's cart exists or not
        let userCart = await cartSchema.findOne({ userId });
        if (userCart) {
            // Check if the product is already in the cart
            const productIndex = userCart.productArray.indexOf(product._id);
            if (productIndex > -1) {
                // If product exists in the cart, update the quantity
                userCart.productQuantity[productIndex] += 1;
            } else {
                // If product does not exist in the cart, add it
                userCart.productArray.push(product._id);
                userCart.productQuantity.push(1);
            }
            await userCart.save();
            console.log("Product Added");
        } else {
            // If user's cart does not exist, create a new cart
            await cartSchema.create({
                userId,
                productArray: [product._id],
                productQuantity: [1]
            });
            console.log("New Cart Created and Product Added");
        }
        res.status(200).json({
            success: true,
            message: "Product added to cart successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred",
            error: err.message
        });
    }
};