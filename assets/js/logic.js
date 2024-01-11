let startEl = document.getElementById("start-screen");
let timer = document.getElementById("time");
let timeLeft = 75;

startEl.addEventListener("click", function() {
    startEl.style.display = "none";
    let timeInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;
        //   if(timeLeft === 0) {
        //     // Stops execution of action at set interval
        //     clearInterval(timeInterval);
        // }
      }, 1000);
});

