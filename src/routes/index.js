const express = require('express');
const router = express.Router(); 
const Feedback = require('../models/Feedback');

router.get('/', async (req, res) => {
    const cantPos = await Feedback.find({"isPositive": true}).count();
    const cantNeg = await Feedback.find({"isPositive": false}).count();

    if(req.user){
        const userName = req.user.name;
        res.render('index', {userName, cantPos, cantNeg});
    }else{
        res.render('index', {cantPos, cantNeg});
    }
});

router.get('/about', async (req, res) => {
    const cantPos = await Feedback.find({"isPositive": true}).count();
    const cantNeg = await Feedback.find({"isPositive": false}).count();
    if(req.user){
        const userName = req.user.name;
        res.render('./about', {userName, cantPos, cantNeg});
    }else{
        res.render('./about', {cantPos, cantNeg});
    }
});


module.exports = router;

