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

// List input code
const form = document.getElementById("item-form");
const input = document.getElementById("item-input");
const list = document.getElementById("item-list");
const pickActivityButton = document.getElementById("pick-activity-button");
const activityResult = document.getElementById("activity-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const item = input.value.trim();
  if (item === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);

  input.value = "";
});

pickActivityButton.addEventListener("click", function () {
  const activities = Array.from(list.children).map((activity) => activity.textContent || "");

  if (activities.length === 0) {
    activityResult.textContent = "Add an activity first.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * activities.length);
  activityResult.textContent = `Result: ${activities[randomIndex]}`;
});

// 8 Ball Response Code
const eightBallResponses = [
  "Yes",
  "No",
  "I really don't care.",
  "Only if you pay me $314 up front.",
  "Honestly, nah.",
  "Definitely",
  "Never",
  "Not today.",
  "Today and today only.",
  "Heck no."
];

const eightBallButton = document.getElementById("8-ball-button");
const eightBallResult = document.getElementById("8-ball-result");

eightBallButton.addEventListener("click", function () {
  if (eightBallResponses.length === 0) {
    eightBallResult.textContent = "Add some responses in the script first.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * eightBallResponses.length);
  eightBallResult.textContent = eightBallResponses[randomIndex];
});