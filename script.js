const button = document.getElementById("redrumBtn");
const message = document.getElementById("message");

let clicked = false;

button.addEventListener("click", () => {
  if (!clicked) {
    message.textContent = "R E D R U M";
    message.classList.remove("hidden");
    button.textContent = "COME PLAY WITH US";
    clicked = true;
    flickerEffect();
  } else {
    window.alert("Room 237 is not what it seems...");
  }
});

function flickerEffect() {
  setInterval(() => {
    message.style.opacity = Math.random() > 0.5 ? "1" : "0.3";
  }, 150);
}
