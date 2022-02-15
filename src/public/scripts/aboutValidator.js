document.getElementById('dislike-btn').addEventListener('click', function(e){
    console.log('hola buenas');
    isEmpty(e, false);
})
document.getElementById('like-btn').addEventListener('click', function(e){
    isEmpty(e, true);
})

function isEmpty(e, option) {
    const feedbackDescription =  document.getElementById('feedbackComment').value;
    if(feedbackDescription === ''){
        e.preventDefault();
    } else {
        document.getElementById('isPositive'). value = option;
        var form = document.getElementById("form-id");
        form.submit();
    }
}

