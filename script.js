const openHeart = document.getElementById("openHeart");
const letter = document.getElementById("letter");
const kissButton = document.getElementById("kissButton");
const kissMessage = document.getElementById("kissMessage");

function makeHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["❤️", "💕", "💗", "💖", "💋"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4200);
}

setInterval(makeHeart, 900);

openHeart.addEventListener("click", () => {
  letter.classList.remove("hidden");
  letter.classList.add("show");
  letter.scrollIntoView({ behavior: "smooth", block: "start" });

  for (let i = 0; i < 12; i++) {
    setTimeout(makeHeart, i * 100);
  }
});

kissButton.addEventListener("click", () => {
  kissMessage.textContent =
    "If you are smiling right now, then my little website mission is complete. 😂❤️ Come here, bbe. I owe you a cuddle and a kiss.";
  for (let i = 0; i < 18; i++) {
    setTimeout(makeHeart, i * 90);
  }
});
