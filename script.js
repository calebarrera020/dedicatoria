// 💕 Cambia esta fecha por la tuya
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
        ${days} días ${h} horas ${m} minutos ${s} segundos;
}

setInterval(updateCounter, 1000);
updateCounter();
