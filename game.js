document.addEventListener("DOMContentLoaded", function (event) {
    var start = document.querySelector("#start");
    var end = document.querySelector("#end");
    var boundaries = document.querySelectorAll(".boundary");
    var status = document.querySelector("#status");
    var score = 0;
    var play_mode = false;
    start.addEventListener("mouseover", function () {
        play_mode = true;
        status.innerHTML = "The game has started";
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].className = "boundary";
        }
    })
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function () {
            if (play_mode == true) {
                status.innerHTML = "You lost!";
                score -= 10;
                for (var i = 0; i < boundaries.length; i++) {
                    boundaries[i].className = "boundary youlose";
                }
                play_mode = false;
                document.querySelector(".score").innerHTML = `Your score is ${score}`;
            }
        })
    }
    start.addEventListener("click", function () {
        score = 0;
        document.querySelector(".score").innerHTML = `your score is ${score}`
    });
    end.addEventListener("mouseover", function () {
        if (play_mode == true) {
            score += 5;
            status.innerHTML = "You won";
            play_mode = false;
            document.querySelector(".score").innerHTML = `Your score is ${score}`;
        }
    })
    var view_socre = document.createElement("p");
    view_socre.innerHTML = `Your score is ${score}`;
    view_socre.className = "score";
    document.querySelector("h1").appendChild(view_socre);
});