const express = require('express')
const router = express.Router(); 

router.get('/users/signin', (req, res) => {
    res.render('users/signin')
});

router.get('/users/signup', (req, res) => {
    res.render('users/signup')
});

router.post('/users/signup', (req, res) => {
    //validar q el mail no exista
    //validar que contrasenia sea segura

    const {name, email, pwd, confirmpwd} = req.body;
    if((name == "") || (email == "") || (pwd == "") || (confirmpwd == "")){
        let message = "You must fill all fields to create a user.";
        res.render("users/signup", {name, email, pwd, confirmpwd, message});
    }
    else if(pwd != confirmpwd){
        let message = "Passwords doesn't match.";
        res.render("users/signup", {name, email, pwd, confirmpwd, message});
    }
    else{
        res.send('ok');
    }
});



module.exports = router;

