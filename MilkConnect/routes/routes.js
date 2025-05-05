const express = require('express');
const router = express.Router();

// Import controller
const {addProd,allProd,updateProduct,deleteProduct} = require('../controllers/addProduct');
const {allSeller,addSeller,deleteSeller,updateSeller} = require('../controllers/addSeller');
const {addCustomer} = require('../controllers/addcustomer');
const {addToCart} = require('../controllers/cart');


// Mount the controller with the routes
    // router.post('/addProduct',addProd);
    // router.post('/addSeller',addSeller);
    // router.get('/allSeller', allSeller);
    // router.get('/allProduct', allProd);
    // router.get('/updateProd/:proName/:proPrice',updateProduct);
    // router.get('/updateSeller/:sellerName/:sellerMail',updateSeller);
    // router.get('/deleteProduct/:proName/:proPrice',deleteProduct);
    // router.get('/deleteSeller/:sellerName/:sellerMail',deleteSeller);
    // router.post('/addCustomer',addCustomer);
    // router.post('/addToCart',addToCart);


// Export the router
module.exports = router;