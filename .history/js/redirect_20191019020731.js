function delayRedirect(){
    document.getElementById('delayMsg').innerHTML = 'Please wait you\'ll be redirected after <span id="countDown">5</span> seconds....';
    var count = 5;
    setInterval(function(){
        count--;
        document.getElementById('countDown').innerHTML = count;
        if (count == 0) {
            window.location = 'http://127.0.0.1:5500/index.html'; 
        }
    },1000);
}