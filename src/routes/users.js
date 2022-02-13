const express = require('express');
const router = express.Router(); 
const User = require('../models/User'); 
const passport = require('passport');

// sign in
router.get('/users/signin', (req, res) => {
    res.render('users/signin')
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes/add',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

// sign up
router.get('/users/signup', (req, res) => {
    res.render('users/signup')
});

router.post('/users/signup', async (req, res) => {
    // validations
    const {name, email, password, confirmPwd} = req.body;
    if((name == "") || (email == "") || (password == "") || (confirmPwd == "")){
        let message = "You must fill all fields to create a user.";
        res.render("users/signup", {name, email, password, confirmPwd, message});
    }
    else if(password != confirmPwd){
        let message = "Passwords doesn't match.";
        res.render("users/signup", {name, email, password, confirmPwd, message});
    }
    else if(!containsSpecialChars(password)){
        let message = 'The password must contain at leats 5 characters with one special character.';
        res.render("users/signup", {name, email, password, confirmPwd, message});
    }
    else if(await emailAlreadyExists(email)){
        let message = 'This email already has an account.';
        res.render("users/signup", {name, email, password, confirmPwd, message});
    }
    else{
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();   
        req.flash('success_msg', `User ${email} Created Successfully`);
        res.redirect('/users/signin');
    }

    function containsSpecialChars(password){
        //var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const strongRegex = new RegExp("^(?=.*[.,?!@#\$%\^&\*])(?=.{5,})");
        if(strongRegex.test(password)) {
            return true;
        }
        return false;
    }

    async function emailAlreadyExists(inputEmail){
        const existingEmail = await User.findOne({email: inputEmail});
        if(existingEmail){
            return true;
        };
        return false;
    }
});



module.exports = router;

