if(document.getElementById('flash_msg')){
    let message = document.getElementById('flash_msg').textContent;
    toastr.success(message);
} 