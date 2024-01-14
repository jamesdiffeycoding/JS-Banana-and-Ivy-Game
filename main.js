console.log("main.js file running")

/* EXAMPLE QUERY
 INSERT INTO bananaandivyleaderboard (username, time_in_seconds, date)
 VALUES ('James', '20', '2024-01-01')

 */

// query selectors
const bananas = document.querySelectorAll(".banana")
const poisonousplants = document.querySelectorAll(".poison")
const grid = document.querySelector(".grid")
const bananacount = document.querySelector("#bananacount")
const bananacountnoun = document.querySelector("#bananacountnoun")
const startblock = document.querySelector(".start")
const finish = document.querySelector(".finish")
const timer = document.querySelector("#timer")

// event listeners
// -- prevent right clicking in grid
grid.addEventListener("contextmenu", () => {event.preventDefault()})

let clock=0;
let firstPlay = true;

let timerInterval; // Declare a variable to store the interval

startblock.addEventListener("mouseover", () => {
  resetGame();
  firstPlay = false;
  clock = 0;
  clearInterval(timerInterval); // Clear previous interval if exists
  timerInterval = setInterval(() => {
    clock++;
    timer.textContent = clock;
  }, 1000);
    gameOngoing = true;
  }
);
finish.addEventListener("mouseover", () => {if (score > 7) {
    alert("You win!")
    resetGame();
}})
let score = 0
bananas.forEach(banana => {
    banana.addEventListener("mouseover", () => {
      if (!banana.dataset.hovered) {
        score += 1;
        banana.dataset.hovered = true;
        banana.classList.add("bananacollected");
        bananacount.innerHTML = `${8 - score}`;
        bananacountnoun.innerHTML = `${8 - score == 1 ? "banana" : "bananas"}`;
        console.log(`You just scored point number ${score}!`);

      }
    });
  });
  
  poisonousplants.forEach(poisonousplant => {
    poisonousplant.addEventListener("mouseover", () => {
      resetGame();
      let responseGenerator = Math.floor(Math.random() * 3);
      if(firstPlay) {alert("Please don't touch the poisonous plants! Go to the start pad if you want to play.")} else {
        
          if(responseGenerator==1) {
              alert("Uh oh! Please return to the start to try again!");
            } else if(responseGenerator==2) {
                alert("Oh no! You have to go back to the start!");}
                else {
                    alert("Sorry");
                }
            }
      }

        )


    });


  function resetGame() {
    score = 0;
    bananas.forEach(banana => {
      delete banana.dataset.hovered;
      banana.classList.remove("bananacollected");
      bananacount.textContent = "8";
      bananacountnoun.textContent = "bananas";
    });
  }


