// computerPlay code

computerPlay = () => {
  let choice = ["Bulbasaur", "Charmander", "Squirtle"];
  let min = 0;
  let max = choice.length - 1;
  let randomChoice = Math.floor(Math.random() * (max - min + 1) + min);
  return choice[randomChoice];
};

// Event Listener - playerSelection

const inputB = document.querySelector("#img-bulbasaur");

const inputC = document.querySelector("#img-charmander");

const inputS = document.querySelector("#img-squirtle");

function playRoundAsBulbasaur() {
  playRound("Bulbasaur");
}

function playRoundAsCharmander() {
  playRound("Charmander");
}

function playRoundAsSquirtle() {
  playRound("Squirtle");
}

inputB.addEventListener("click", playRoundAsBulbasaur);

inputC.addEventListener("click", playRoundAsCharmander);

inputS.addEventListener("click", playRoundAsSquirtle);

// Round increment

const round = document.querySelector(".round-header");

let r = 0;

changeRound = () => {
  ++r;
  round.textContent = `Round ${r}`;
};

// Draw counter

let drawCounter = 0;

// Health

let computerHealth = 100;
let playerHealth = 100;

const playerHealthScore = document.querySelector("#player-health");

const computerHealthScore = document.querySelector("#computer-health");

// Round text
const roundText1 = document.querySelector("#round-text1");

// computer selection images

computerSelectionImgB = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("bulba-comp");
  document.getElementById("img-computer-choice").src = "./images/Bulbasaur.png";
};

computerSelectionImgC = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("char-comp");
  document.getElementById("img-computer-choice").src =
    "./images/charmander.png";
};

computerSelectionImgS = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("squir-comp");
  document.getElementById("img-computer-choice").src = "./images/Squirtle.png";
};

// Rounds info border color change

const roundsBorder = document.querySelectorAll(".rounds-border");

// pokeball

pokeball = () => {
  const imgPokeball = document.querySelector("#img-pokeball");
  imgPokeball.classList.add("pokeball-refresh");
  document.getElementById("img-pokeball").style.visibility = "visible";
  document.getElementById("img-pokeball").src = "./images/Poke_Ball.jpg";

  const refreshText = document.createElement("p");
  refreshText.classList.add("refresh-text");
  refreshText.textContent = "Click the pokeball to play again.";

  const refreshDiv = document.getElementById("refresh");

  refreshDiv.insertBefore(refreshText, imgPokeball);
};

function refreshGame() {
  window.location.reload();
}

const inputPokeball = document.querySelector("#img-pokeball");
inputPokeball.addEventListener("click", refreshGame);

// PlayRound

playRound = (playerPokemon) => {
  changeRound();

  const computerSelection = computerPlay();
  let playerSelection = playerPokemon;

  if (playerSelection == "Bulbasaur" && computerSelection == "Charmander") {
    playerHealth -= 20;
    drawCounter = 0;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #EE5949";
    });

    computerSelectionImgC();
    roundText1.textContent = `You took damage! - Bulbasaur’s Vine Whip stood no chance against Charmander’s scorching hot Ember attack!`;

    playerHealthScore.textContent = `${playerHealth}/100`;
  } else if (
    playerSelection == "Bulbasaur" &&
    computerSelection == "Squirtle"
  ) {
    computerHealth -= 20;

    drawCounter = 0;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #AEE2B3";
    });

    computerSelectionImgS();
    roundText1.textContent = `Effective! - Bulbasaur’s stinging Vine Whip overpowered Squirtle’s Water Gun!`;
    computerHealthScore.textContent = `${computerHealth}/100`;
  } else if (
    playerSelection == "Bulbasaur" &&
    computerSelection == "Bulbasaur"
  ) {
    ++drawCounter;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: black";
    });
    roundText1.textContent = `Draw - You both chose Bulbasaur. The Vine Whips cancelled each other out.`;
    computerSelectionImgB();
  } else if (
    playerSelection == "Charmander" &&
    computerSelection == "Bulbasaur"
  ) {
    computerHealth -= 20;

    drawCounter = 0;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #AEE2B3";
    });

    roundText1.textContent = `Effective! - Charmander’s scortching hot Ember overpowered Bulbasaur’s Vine Whip!`;
    computerSelectionImgB();
    computerHealthScore.textContent = `${computerHealth}/100`;
  } else if (
    playerSelection == "Charmander" &&
    computerSelection == "Squirtle"
  ) {
    playerHealth -= 20;

    drawCounter = 0;
    console.log(drawCounter);

    roundText1.textContent = `You took damage! - Charmander’s Ember stood no chance against Squirtle's whirling Water Gun!`;

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #EE5949";
    });

    computerSelectionImgS();
    playerHealthScore.textContent = `${playerHealth}/100`;
  } else if (
    playerSelection == "Charmander" &&
    computerSelection == "Charmander"
  ) {
    ++drawCounter;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: black";
    });
    roundText1.textContent = `Draw - You both chose Charmander. The Ember attacks cancelled each other out.`;
    computerSelectionImgC();
  } else if (
    playerSelection == "Squirtle" &&
    computerSelection == "Bulbasaur"
  ) {
    playerHealth -= 20;

    drawCounter = 0;
    console.log(drawCounter);

    roundText1.textContent = `You took damage! - Squirtle’s Water Gun stood no chance against Bulbasaur’s stinging Vine Whip!`;

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #EE5949";
    });

    computerSelectionImgB();
    playerHealthScore.textContent = `${playerHealth}/100`;
  } else if (
    playerSelection == "Squirtle" &&
    computerSelection == "Charmander"
  ) {
    computerHealth -= 20;

    drawCounter = 0;
    console.log(drawCounter);

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #AEE2B3";
    });

    roundText1.textContent = `Effective! - Squirtle’s whirling Water Gun overpowered Charmander's Ember!`;
    computerSelectionImgC();
    computerHealthScore.textContent = `${computerHealth}/100`;
  } else if (playerSelection == "Squirtle" && computerSelection == "Squirtle") {
    ++drawCounter;
    console.log(drawCounter);
    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: black";
    });
    roundText1.textContent = `Draw - You both chose Squirtle. The Water Guns cancelled each other out.`;
    computerSelectionImgS();
  }
  /**
Will add Draw Function later 

  if (drawCounter == 3) {
    computerHealth -= 20;
    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: gold";
    });
    roundText1.textContent = `Three draws in a row? Must be a glitch… Secret choice unlocked! You used a wild Missingno to defeat Computers ${computerSelection}.`;
  }

  */

  if (playerHealth == 0) {
    roundText1.textContent = `Defeat! You were beaten by trainer Computer. You've got a lot of training to do!`;
    inputB.removeEventListener("click", playRoundAsBulbasaur);
    inputC.removeEventListener("click", playRoundAsCharmander);
    inputS.removeEventListener("click", playRoundAsSquirtle);
    pokeball();
  } else if (computerHealth == 0) {
    roundText1.textContent = `Victory! You defeated trainer Computer. You'll make a great Pokemon Master!`;
    inputB.removeEventListener("click", playRoundAsBulbasaur);
    inputC.removeEventListener("click", playRoundAsCharmander);
    inputS.removeEventListener("click", playRoundAsSquirtle);
    pokeball();
  }
};
