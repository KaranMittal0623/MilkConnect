const express = require('express');
const router = express.Router();

// Controllers
const {readSeller,updateSelect,deleteSeller} = require('../controllers/frontSeller');
const {addSeller} = require('../controllers/addSeller');


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

router.post('/updateSeller', updateSelect);
router.get('/readSeller', readSeller);
router.post('/addSeller', addSeller);
router.post('/deleteSeller',deleteSeller);


module.exports = router;