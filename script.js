const startDate = new Date("2024-12-24T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

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

/* Corazones cayendo */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.style.left = Math.random() * 300 + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.querySelector(".tree").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
