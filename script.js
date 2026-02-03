const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const note = document.getElementById("note");
const actions = document.querySelector(".actions");

const sweetMessages = [
  "Yay! I can't wait for our date 💖",
  "Best. Valentine. Ever! 💘",
  "You just made my whole day! 🥰",
  "Forever my favorite person 💕",
];

const playfulNoMessages = [
  "Nope! Catch me if you can 😜",
  "No button escaped!",
  "Try again, cutie!",
  "Too slow, love!",
];

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function moveNoButton() {
  const area = actions.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = area.width - button.width;
  const maxY = area.height - button.height;

  if (maxX <= 0 || maxY <= 0) {
    return;
  }

  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  noButton.style.transform = `translate(${nextX}px, ${nextY}px)`;
  note.textContent = randomFrom(playfulNoMessages);
}

function resetNoButton() {
  noButton.style.transform = "translate(0, 0)";
}

yesButton.addEventListener("click", () => {
  note.textContent = randomFrom(sweetMessages);
  yesButton.textContent = "Yes!!! 💞";
  resetNoButton();
});

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

window.addEventListener("resize", resetNoButton);
