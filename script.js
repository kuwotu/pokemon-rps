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

inputB.addEventListener("click", function () {
  let player = "Bulbasaur";
  playRound(player);
});

inputC.addEventListener("click", function () {
  let player = "Charmander";
  playRound(player);
});

inputS.addEventListener("click", function () {
  let player = "Squirtle";
  playRound(player);
});

// Round increment

const round = document.querySelector(".round-header");

let r = 0;

changeRound = () => {
  ++r;
  round.textContent = `Round ${r}`;
};

// Health

let computerHealth = 100;
let playerHealth = 100;

const playerHealthScore = document.querySelector("#player-health");

const computerHealthScore = document.querySelector("#computer-health");

// Round text
const roundText1 = document.querySelector("#round-text1");

computerSelectionImgB = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("bulba-comp");
  document.getElementById("img-computer-choice").src = "/images/Bulbasaur.png";
};

computerSelectionImgC = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("char-comp");
  document.getElementById("img-computer-choice").src = "/images/charmander.png";
};

computerSelectionImgS = () => {
  let bulbaClass = document.querySelector("#img-computer-choice");
  bulbaClass.classList.add("squir-comp");
  document.getElementById("img-computer-choice").src = "/images/Squirtle.png";
};

// Rounds info border color change

const roundsBorder = document.querySelectorAll(".rounds-border");

playRound = (player) => {
  changeRound();

  const computerSelection = computerPlay();
  let playerSelection = player;

  if (playerSelection == "Bulbasaur" && computerSelection == "Charmander") {
    playerHealth -= 20;

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

    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: #AEE2B3";
    });

    roundText1.textContent = `Effective! - Squirtle’s whirling Water Gun overpowered Charmander's Ember!`;
    computerSelectionImgC();
    computerHealthScore.textContent = `${computerHealth}/100`;
  } else if (playerSelection == "Squirtle" && computerSelection == "Squirtle") {
    roundsBorder.forEach((roundsBorder) => {
      roundsBorder.style.cssText = "border-color: black";
    });
    roundText1.textContent = `Draw - You both chose Squirtle. The Water Guns cancelled each other out.`;
    computerSelectionImgS();
  }
};
