const diceImagesObj = {
  1: "./images/dice1.png",
  2: "./images/dice2.png",
  3: "./images/dice3.png",
  4: "./images/dice4.png",
  5: "./images/dice5.png",
  6: "./images/dice6.png",
};

document.getElementById("roll").addEventListener("click", rollDice);

function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", diceImagesObj[randomNumber1]);
  document
    .querySelector(".img2")
    .setAttribute("src", diceImagesObj[randomNumber2]);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "👌🏾 Player 1 Wins!";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 👌🏾";
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "🤜🏾 Draw! 🤛🏾";
  }
}
