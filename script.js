// FECHA
const startDate = new Date("2024-12-24T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const h = hours % 24;
  const m = minutes % 60;
  const s = seconds % 60;

  document.getElementById("counter").innerHTML =
    `${days} días ${h} horas ${m} minutos ${s} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

// CORAZONES CAYENDO
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "small-heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 800);
