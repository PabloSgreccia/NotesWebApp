document.getElementById('show-pwd-img').addEventListener('mouseover', ()=>{
    document.getElementById('password').type = 'text';
    document.getElementById('show-pwd-img').className = 'bi bi-eye-fill';
});

document.getElementById('show-pwd-img').addEventListener('mouseout', ()=>{
    document.getElementById('password').type = 'password';
    document.getElementById('show-pwd-img').className = 'bi bi-eye-slash-fill';
});