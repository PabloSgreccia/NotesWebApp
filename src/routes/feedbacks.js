const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedback', async (req, res) => {
    const {comment, isPositive} = req.body;
    //console.log(req.body);
    const newFeedback = new Feedback({comment});
    if(isPositive == 'true'){
        newFeedback.isPositive = true;
    }else{
        newFeedback.isPositive = false;
    }
    if(req.user){
        const userEmail = req.user.email;
        newFeedback.userEmail = userEmail;
    }
    await newFeedback.save();
    req.flash('success_msg', 'Feedback Sent Successfully');
    res.redirect('./about');
})

module.exports = router;