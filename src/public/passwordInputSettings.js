// show passwords
document.getElementById('show-pwd-img').addEventListener('mouseover', ()=>{
    document.getElementById('pwd').type = 'text';
    document.getElementById('confirmPwd').type = 'text';
    document.getElementById('show-pwd-img').className = 'bi bi-eye-fill';
})

document.getElementById('show-pwd-img').addEventListener('mouseout', ()=>{
    document.getElementById('pwd').type = 'password';
    document.getElementById('confirmPwd').type = 'password';
    document.getElementById('show-pwd-img').className = 'bi bi-eye-slash-fill';
})

// validate passwords (only to show the check)
document.getElementById('pwd').addEventListener('input', ()=>{
    hiddenCheckAttribute();
})
document.getElementById('confirmPwd').addEventListener('input', ()=>{
    hiddenCheckAttribute();
})
hiddenCheckAttribute();

function hiddenCheckAttribute(){
    console.log('hola')
    const cpwdContent = document.getElementById('confirmPwd').value;
    const pwdContent = document.getElementById('pwd').value;
    if((cpwdContent == pwdContent) && (pwdContent.length > 0) && (containsSpecialChars(pwdContent))){
        document.getElementById('correct-pwd').className = 'bi bi-check-all';
        document.getElementById('correct-pwd').title = 'Both Passwords Match'
    }
    else{
        document.getElementById('correct-pwd').className = 'bi bi-info-circle';
        document.getElementById('correct-pwd').title = 'The password must contain at leats 5 characters with one special character'
    }
}

function containsSpecialChars(password){
    const strongRegex = new RegExp("^(?=.*[.,?!@#\$%\^&\*])(?=.{5,})");

    if(strongRegex.test(password)) {
        return true;
    } 
    return false;
}