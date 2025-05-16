const express = require('express');
const router = express.Router();

// Controllers
const {readSeller,updateSelect,deleteSeller} = require('../controllers/frontSeller');
const {addSeller} = require('../controllers/addSeller');
const {showProduct} = require('../controllers/frontProducts');
const {addToCart, removeFromCart, showCart} = require('../controllers/frontCart');
// const {removeFromCart} = require('../controllers/frontCart');


// Pages FronEnd Router

const BASE_URL = '/api/v1';

router.get('/home', (req, res) => {
    res.render('layout',{BASE_URL});
});
router.get('/register',(req,res)=>{
    res.render('registerSeller');
});
router.get('/update',(req,res)=>{
    res.render('update');
})
router.get('/delete',(req,res)=>{
    res.render('deleteSeller');
})
router.get('/showProduct', showProduct);

router.post('/updateSeller', updateSelect);
router.get('/readSeller', readSeller);
router.post('/addSeller', addSeller);
router.post('/deleteSeller',deleteSeller);
router.post('/addToCart', addToCart);
router.post('/removeFromCart', removeFromCart);
router.get('/cart', showCart);


module.exports = router;