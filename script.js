const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const restartBtn = document.getElementById("restart-btn");

let score = 0;
let timeLeft = 30;
let gameTimer;
let moleTimer;

function randomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  const hole = randomHole();
  const mole = document.createElement("div");
  mole.classList.add("mole");

  mole.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    mole.remove();
  };

  hole.appendChild(mole);
  mole.style.display = "block";

  setTimeout(() => {
    mole.remove();
  }, 1000);
}

function startGame() {
  clearGame();
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  gameTimer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      stopGame();
      alert("Game Over! 🎉 Your score: " + score);
    }
  }, 1000);

  moleTimer = setInterval(showMole, 800);
}

function stopGame() {
  clearInterval(gameTimer);
  clearInterval(moleTimer);
}

function restartGame() {
  stopGame();
  startGame();
}

function clearGame() {
  holes.forEach(hole => {
    hole.innerHTML = "";
  });
}

startBtn.onclick = startGame;
stopBtn.onclick = stopGame;
restartBtn.onclick = restartGame;
