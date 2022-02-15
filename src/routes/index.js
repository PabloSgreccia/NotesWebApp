const express = require('express');
const router = express.Router(); 
const Feedback = require('../models/Feedback');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', async (req, res) => {
    const cantPos = await Feedback.find({"isPositive": true}).count();
    const cantNeg = await Feedback.find({"isPositive": false}).count();
    res.render('about', {cantPos, cantNeg});    
});


module.exports = router;

