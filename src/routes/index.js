const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    
    if(req.user){
        const userName = req.user.name;
        res.render('about', {userName});
    } else{
        res.render('about');
    }
    
});


module.exports = router;

