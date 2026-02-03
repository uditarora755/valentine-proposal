const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const note = document.getElementById("note");
const actions = document.querySelector(".actions");

const sweetMessages = [
  "Yay! I can't wait for our date 💖",
  "You just made my whole day! 🥰",
  "Forever my favorite person 💕",
];

const playfulNoMessages = [
  "Nope! Catch me if you can 😜",
  "No button escaped!",
  "Try again, baby!",
  "Too slow, baby!",
];

const noImg = [ "noimg0", "noimg1", "noimg2", "noimg3" ];

const yesImg = "yesimg";
const defaultImg = "defaultimg";

let currentImg = null;

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

  const nextX = (Math.random() * maxX) + button.width / 2;
  const nextY = (Math.random() * maxY) + button.height / 2;

  while(true){
    let nextImg = randomFrom(noImg);
    if(nextImg !== currentImg){
      showImage(nextImg);
      break;
    }
  }

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
  showImage(yesImg);
});

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

function resetImages() {
  showImage(defaultImg);
}

function showImage(id) {
  const allImages = [defaultImg, yesImg, ...noImg];
  allImages.forEach(imgId => {
    document.getElementById(imgId).hidden = true;
  });
  document.getElementById(id).hidden = false;
  currentImg = id;
}
