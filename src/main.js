console.log("main.js file running")

// query selectors
const bananas = document.querySelectorAll(".banana")
const poisonousplants = document.querySelectorAll(".poison")
const grid = document.querySelector(".grid")
const start = document.querySelector(".start")

const finish = document.querySelector(".finish")

// event listeners
// -- prevent right clicking in grid
grid.addEventListener("contextmenu", () => {event.preventDefault()})

start.addEventListener("mouesover", () => {
    alert("Game started!")
}
finish.addEventListener("mouseover", () => {if (score > 10) {
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
        console.log(`You just scored point number ${score}!`);
      }
    });
  });
  
  poisonousplants.forEach(poisonousplant => {
    poisonousplant.addEventListener("mouseover", () => {
      resetGame();
      alert("Game reset!");
    });
  });
  
  function resetGame() {
    score = 0;
    bananas.forEach(banana => {
      delete banana.dataset.hovered;
      banana.classList.remove("bananacollected");
    });
  }


