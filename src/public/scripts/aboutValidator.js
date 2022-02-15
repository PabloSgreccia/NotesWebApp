document.getElementById('dislike-btn').addEventListener('click', function(e){
    const feedbackDescription =  document.getElementById('feedbackDescription').value;
    if(feedbackDescription === ''){
        e.preventDefault();
    } else{
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.countapi.xyz/hit/localhost:400/dislikeclick");
        xhr.responseType = "json";
        xhr.onload = function() {
            alert(`This button has been clicked ${this.response.value} times!`);
        }
        xhr.send();
    }
})
document.getElementById('like-btn').addEventListener('click', function(e){
    const feedbackDescription =  document.getElementById('feedbackDescription').value;
    if(feedbackDescription === ''){
        e.preventDefault();
    } else{
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.countapi.xyz/hit/localhost:400/likeclick");
        xhr.responseType = "json";
        xhr.onload = function() {
            alert(`This button has been clicked ${this.response.value} times!`);
        }
        xhr.send();
    }
})


function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}