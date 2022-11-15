let crosshair = document.getElementById("crosshair");
let zombiesContainer = document.getElementById("zombies-container");
let zombie = document.getElementsByClassName('zombie');
let score = document.getElementById("score");
let hearts = [document.getElementById("heart1"), document.getElementById("heart2"), document.getElementById("heart3")];
let body = document.getElementsByTagName("body")[0];
let start = document.getElementById("start");
let startPage = document.getElementById("start-game");
let endPage = document.getElementById("end-game");
let restartButton = document.getElementById("restart");
let scores = [document.getElementById("score1"), document.getElementById("score2"), document.getElementById("score3"), document.getElementById("score4"), document.getElementById("score5"), document.getElementById("score6"), document.getElementById("score7")];

var livesCount = 3;
var currentScore = 0;
var speeds = [5, 4.5, 4, 3.5, 2.5]
var spawnRate = 5;

const positionElement = (event) => {
    body.style.cursor = "none";
    crosshair.style.opacity = 1;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    crosshair.style.transform = `translate3d(${mouseX - 25}px, ${mouseY - 25}px, 0)`
}

const shooting = (event) => {
    event.stopPropagation();
    // alert(event.target.className);
    if(event.target.className == "zombie") {
        event.target.style.display = "none";
        event.target.style.animation = "none";
        clearTimeout(event.target.timeout);
        currentScore += 12;
        score.innerHTML = parseInt(currentScore);
    }
    else {
        if (currentScore > 0) currentScore -= 6;
        score.innerHTML = parseInt(currentScore);
    }
}

async function adjustSpawnRate() {
    while (spawnRate > 3 && livesCount > 0) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        spawnRate -= 0.1;
        console.log(spawnRate);
    }
}

async function randomGenerator() {
    while (livesCount > 0) {
        let time = Math.floor(Math.random() * 500);
        await new Promise(resolve => setTimeout(resolve, time));
        spawnZombie();
    }
    gameover();
}

const spawnZombie = () => {
    let ifSpawn = Math.floor(Math.random() * spawnRate);
    if(ifSpawn == 1) createZombie();
}

const createZombie  = () => {
    let zoombie = document.createElement("div");
    zoombie.className = "zombie";
    let stats = randomiseZombieStats();
    zoombie.style.bototm = `${stats[0]}px`;
    zoombie.style.scale = `${stats[1]}%`;
    zoombie.style.animationDuration = `0.5s, ${speeds[stats[2]]}s`;
    zombiesContainer.appendChild(zoombie);
    zoombie.timeout = setTimeout(liveLost, speeds[stats[2]] * 1000);
}

const randomiseZombieStats = () => {
    let size = Math.floor(Math.random() * 20) + 80;
    let position = Math.floor(Math.random() * 50);
    let speed = Math.floor(Math.random() * 5);
    return [position, size, speed];
}

const liveLost = () => {
    if(livesCount > 0) {
        livesCount--;
        hearts[livesCount].src = "empty-heart.png";
    }
}

const startGame = () => {
    endPage.style.display = "none";
    window.addEventListener("mousemove", positionElement);
    game.addEventListener("click", shooting);
    spawnRate = 5;
    randomGenerator();
    adjustSpawnRate();
}

const startWithName = () => {
    let nick = document.getElementById("nickname").value;
    if(nick.includes(" ") || nick.length >= 8 || nick.length == 0) alert("Nick cannot contain spaces and must be shorter than 8 characters");
    else {
        startPage.style.display = "none";
        currentScore = 0;
    score.innerHTML = 0;
    livesCount = 3;
    hearts.forEach(heart => heart.src = "filled-heart.png");
        startGame();
    }
}

const gameover = () => {
    window.removeEventListener("mousemove", positionElement);
    game.removeEventListener("click", shooting);
    // uploadAndGetHighscores();
    // highscoresPrompt();
    body.style.cursor = "pointer";
    crosshair.style.opacity = 0;
    endPage.style.display = "block";
}

// async function highscoresPrompt(){
//     var data = await fetch("http://jsonblob.com/1042168999634550784");
//     var json = await data.json();
//     console.log(json);
//     // updateHighscores(json);
// }

// async function uploadAndGetHighscores () {
//     let date = new Date();
//     let name = document.getElementById("nickname").value;
//     let dateToSend = String(date.getDate()) + " " + String(date.getMonth() + 1) + " " + String(date.getFullYear())
//     let time = String(date.getHours()) + ":" + String(date.getMinutes())
    
//     const response = await fetch("http://jsonblob.com/1042168999634550784");
//     json = response.json();
//     console.log(json["array"]);
//     // json["array"].push({"name": name, "score": currentScore, "date": dateToSend, "time": time});
//     // json = json.sort((a, b) => (a.score > b.score));
//     // console.log(json);
//     // scores.forEach(element => {
//     //     element.innerHTML = json[0].name + " | " + json[0].score + " | " + json[0].date + " " + json[0].time;
//     // });
//     // sendScore("http://jsonblob.com/1042168999634550784", json);
// }

// async function sendScore(url = '', data = {}) {
//     const response = await fetch(url, {
//       method: 'PUT', 
//       mode: 'cors', 
//       cache: 'no-cache', 
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Access-Control-Allow-Origin': 'http://127.0.0.1/',
//         'Access-Control-Allow-Credentials': 'false',
//         'Location': '*'
//       },
//       body: JSON.stringify(data)
//     });
//     return response.json();
// }

// window.addEventListener("mousemove", positionElement);
// game.addEventListener("click", shooting);
// window.addEventListener("click", createZombie);
start.addEventListener("click", startWithName);
restartButton.addEventListener("click", () => {
    startPage.style.display = "block";
    endPage.style.display = "none";
});
