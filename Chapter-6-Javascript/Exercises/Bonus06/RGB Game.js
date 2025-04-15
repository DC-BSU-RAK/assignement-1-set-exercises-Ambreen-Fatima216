// Selectors
const rgbValue = document.getElementById("rgbValue");
const colorGrid = document.getElementById("colorGrid");
const newColorsButton = document.getElementById("newColorsButton"); // fixed name
const livesCount = document.getElementById("livesCount");
const scoreCount = document.getElementById("scoreCount");
const message = document.getElementById("message");
const replayButton = document.getElementById("replayButton"); // fixed name

// Game variables
let correctColor = "";
let lives = 3;
let score = 0;

// This function makes a random RGB color
function randomRGB() {
  const r = Math.floor(Math.random() * 256); // red value
  const g = Math.floor(Math.random() * 256); // green value
  const b = Math.floor(Math.random() * 256); // blue value
  return `rgb(${r}, ${g}, ${b})`; // return as a string
}

// This function starts or refreshes the game round
function generateColors() {
  colorGrid.innerHTML = ""; // clear the old colors
  message.textContent = ""; // clear any message

  const colors = []; // make an empty color list

  // Add 6 random colors
  for (let i = 0; i < 6; i++) {
    colors.push(randomRGB());
  }

  // Pick one color to be the right answer
  correctColor = colors[Math.floor(Math.random() * colors.length)];
  rgbValue.textContent = correctColor.toUpperCase(); // show it in the heading

  // Make the color squares
  colors.forEach(color => {
    const div = document.createElement("div"); // make a new box
    div.classList.add("color-square"); // add class for styling
    div.style.backgroundColor = color; // set the background color

    // When clicked, check if it's the correct one
    div.addEventListener("click", () => handleGuess(color));

    // Add the box to the page
    colorGrid.appendChild(div);
  });
}

// This checks if the color the user picked is right
function handleGuess(selectedColor) {
  if (selectedColor === correctColor) {
    message.textContent = "Correct!"; // show success
    score++; // increase score
    scoreCount.textContent = score; // update score display
    setTimeout(generateColors, 1000); // wait 1 second then reload new colors
  } else {
    message.textContent = "Wrong!"; // show wrong message
    lives--; // reduce lives
    livesCount.textContent = lives; // update lives on screen

    // If no lives left, end the game
    if (lives === 0) {
      endGame();
    }
  }
}

// This runs when game is over
function endGame() {
  message.textContent = `Game Over! Final Score: ${score}`; // show final message
  colorGrid.innerHTML = ""; // remove all color boxes
  replayButton.classList.remove("hidden"); // show the replay button
}

// This restarts everything when user clicks "Play Again"
function resetGame() {
  score = 0; // reset score
  lives = 3; // reset lives
  scoreCount.textContent = score;
  livesCount.textContent = lives;
  replayButton.classList.add("hidden"); // hide replay button again
  generateColors(); // start new round
}

// When user clicks "New Colors", start a new round
newColorsButton.addEventListener("click", generateColors);

// When user clicks "Play Again", restart the game
replayButton.addEventListener("click", resetGame);

// Run the game for the first time
generateColors();
