// Coin flip button code
const flip_button = document.getElementById("flip-button");
const flip_result = document.getElementById("flip-result");

flip_button.addEventListener("click", () => {
const coin = Math.random() < 0.5 ? "Heads" : "Tails";
flip_result.textContent = coin;
});

// Coin flip button code
const dice_button = document.getElementById("dice-button");
const dice_result = document.getElementById("dice-result");

dice_button.addEventListener("click", () => {
const roll = Math.floor(Math.random() * 6) + 1;
dice_result.textContent = roll;
});