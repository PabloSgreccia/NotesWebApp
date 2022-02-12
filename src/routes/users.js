const express = require('express')
const router = express.Router(); 
const User = require('../models/User'); 

router.get('/users/signin', (req, res) => {
    res.render('users/signin')
});

router.get('/users/signup', (req, res) => {
    res.render('users/signup')
});

router.post('/users/signup', async (req, res) => {
    // validations
    const {name, email, pwd, confirmPwd} = req.body;
    if((name == "") || (email == "") || (pwd == "") || (confirmPwd == "")){
        let message = "You must fill all fields to create a user.";
        res.render("users/signup", {name, email, pwd, confirmPwd, message});
    }
    else if(pwd != confirmPwd){
        let message = "Passwords doesn't match.";
        res.render("users/signup", {name, email, pwd, confirmPwd, message});
    }
    else if(!containsSpecialChars(pwd)){
        let message = 'The password must contain at leats 5 characters with one special character.';
        res.render("users/signup", {name, email, pwd, confirmPwd, message});
    }
    else if(await emailAlreadyExists(email)){
        let message = 'This email already has an account.';
        res.render("users/signup", {name, email, pwd, confirmPwd, message});
    }
    else{
        const newUser = new User({name, email, pwd});
        newUser.password = await newUser.encryptPassword(pwd);
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

