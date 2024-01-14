
/* EXAMPLE QUERY
 INSERT INTO bananaandivyleaderboard (username, time_in_seconds, date)
 VALUES ('James', '20', '2024-01-01')


 CONNECTION STRING
 postgres://tbbpmtdd:47fjbPHTVKUlEMDJq1Csn4-yP5HaqrUf@horton.db.elephantsql.com/tbbpmtdd 
pw: 47fjbPHTVKUlEMDJq1Csn4-yP5HaqrUf 

api: b00c5ed4-17c6-4223-8108-6b2c8d15ee65 

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
grid.addEventListener("contextmenu", () => {event.preventDefault()}) // -- prevent right clicking in grid

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
    let tier = "none";
    if (clock > 61) {tier="You got there safely. Nice work."};
    if (clock <61 && clock > 45) {tier="Slow and steady. You got the job done!"};
    if (clock <46 && clock > 30) {tier="Nice showing."};
    if (clock <31 && clock >25) {tier="Very impressive."};
    if (clock <26) {tier = "You are elite"};
    if (clock <15) {tier = "You are SUSPICIOUSLY elite"};


    alert(`You got all 8 bananas in ${clock} seconds! ${tier}`)
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


