const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedbackAbout', async (req, res) => {
    const {comment, isPositive} = req.body;
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

router.post('/feedbackIndex', async (req, res) => {
    await saveFeedback(req);
    // const {comment, isPositive} = req.body;
    // const newFeedback = new Feedback({comment});
    // if(isPositive == 'true'){
    //     newFeedback.isPositive = true;
    // }else{
    //     newFeedback.isPositive = false;
    // }
    // if(req.user){
    //     const userEmail = req.user.email;
    //     newFeedback.userEmail = userEmail;
    // }
    // await newFeedback.save();
    req.flash('success_msg', 'Feedback Sent Successfully');
    res.redirect('./');
})

async function saveFeedback(req){
    const {comment, isPositive} = req.body;
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
}

module.exports = router;