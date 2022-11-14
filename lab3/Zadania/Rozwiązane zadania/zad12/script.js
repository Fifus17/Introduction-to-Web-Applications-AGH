let crosshair = document.getElementById("crosshair");
let zombiesContainer = document.getElementById("zombies-container");
let zombie = document.getElementsByClassName('zombie');
let score = document.getElementById("score");
let hearts = [document.getElementById("heart1"), document.getElementById("heart2"), document.getElementById("heart3")];
livesCount = 3;

speeds = [5, 4.5, 4, 3.5, 2.5]

const positionElement = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    crosshair.style.transform = `translate3d(${mouseX - 25}px, ${mouseY - 25}px, 0)`
}

const shooting = (event) => {
    event.stopPropagation();
    alert(event.target.className);
    // event.target.style.display = "none";
}

const createZombie  = () => {
    let zoombie = document.createElement("div");
    zoombie.className = "zombie";
    let stats = randomiseZombieStats();
    zoombie.style.bototm = `${stats[0]}px`;
    zoombie.style.scale = `${stats[1]}%`;
    zoombie.style.animationDuration = `0.5s, ${speeds[stats[2]]}s`;
    zombiesContainer.appendChild(zoombie);
}

const randomiseZombieStats = () => {
    let size = Math.floor(Math.random() * 20) + 80;
    let position = Math.floor(Math.random() * 50);
    let speed = Math.floor(Math.random() * 5);
    return [position, size, speed];
}

const liveLost = () => {
    livesCount--;
    hearts[livesCount].src = "empty-heart.png";
}

window.addEventListener("mousemove", positionElement);
window.addEventListener("click", shooting);
// window.addEventListener("click", createZombie);