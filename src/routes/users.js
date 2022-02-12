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
        //console.log(pwd);
        let message = 'The password must contain at leats 5 characters with one special character';
        res.render("users/signup", {name, email, pwd, confirmPwd, message});
    }
    else{
        res.send('ok');
    }

    function containsSpecialChars(password){
        //var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var strongRegex = new RegExp("^(?=.*[.,?!@#\$%\^&\*])(?=.{5,})");

        if(strongRegex.test(password)) {
            console.log('verdadero');
            return true;
        } else{
            console.log('falso');
            return false;
        }
    }
});



module.exports = router;

