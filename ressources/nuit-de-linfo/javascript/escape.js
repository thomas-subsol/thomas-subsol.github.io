function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            window.location.href="./defaite.html"
        }
    }, 1000);
}

window.onload = function () { //secondes * minutes, pour vint minutes c'est 60 * 20
    var fiveMinutes = 60 * 20,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
