document.addEventListener("DOMContentLoaded", function (event) {
    var start = document.querySelector("#start");
    var end = document.querySelector("#end");
    var boundries = document.querySelectorAll(".boundary");
    var status = document.querySelector("#status");
    var score = 0;
    var play_mode = false;
    start.addEventListener("mouseover", function () {
        play_mode = true;
        status.innerHTML = "The game has started";
    })
    for (var i = 0; i < boundries.length; i++) {
        boundries[i].addEventListener("mouseover", function () {
            if (play_mode == true) {
                status.innerHTML = "You lost";
                score = -10;
                for (var i = 0; i < boundries.length; i++){
                  boundries[i].className="boundary youlose" 
                }
                mode = false;
            }
        })
    }
})