const express = require('express');
const app = express();
const path = require('path');
// path.join(__dirname,'public');
app.use(express.static(path.join(__dirname,'public')));

require('dotenv').config();
const PORT = process.send.PORT || 4000; 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

const route = require('./routes/frontRoutes');
app.use('/api/v1',route);

const connectDB = require('./config/database');
connectDB();

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on Port ${PORT}`);
})