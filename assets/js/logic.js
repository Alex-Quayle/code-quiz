var startEl = document.getElementById("start-screen");
var timer = document.getElementById("time");
var timeLeft = 75;

startEl.addEventListener("click", function() {
    startEl.style.display = "none";
    var timeInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;
        //   if(timeLeft === 0) {
        //     // Stops execution of action at set interval
        //     clearInterval(timeInterval);
        // }
      }, 1000);
});

// New elements are generated:
    // The question
    // options 1-4

// If correct, take away 10 seconds from clock and produce divider + feedback
// Else if wrong, produce divider and feedback

// Repeat for 3 questions then offer functionality to save high score