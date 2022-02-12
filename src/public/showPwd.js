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

document.getElementById('pwd').addEventListener('input', ()=>{
    hiddenCheckAttribute();
})
document.getElementById('confirmPwd').addEventListener('input', ()=>{
    hiddenCheckAttribute();
})
function hiddenCheckAttribute(){
    console.log('hola')
    const cpwdContent = document.getElementById('confirmPwd').value;
    const pwdContent = document.getElementById('pwd').value;
    if(cpwdContent == pwdContent){
        document.getElementById('correct-pwd').hidden = false;
    }
    else{
        document.getElementById('correct-pwd').hidden = true;
    }
}