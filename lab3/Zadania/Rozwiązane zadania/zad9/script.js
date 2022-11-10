// Getting html elements with DOC API
let rightButton = document.getElementById("right-arrow");
let leftButton = document.getElementById("left-arrow");
let randomButton = document.getElementById("random");
let card = document.getElementById("card-container");

// arrays with data to show
const photos = ["person1.png", "person2.png", "person3.png"];
const names = ["JAN KOWALSKI", "JANUSZ NOWAK", "GAREK MAJĘCKI"];
const position = ["Product Manager", "Frontend Developer", "Tech Lead"];
counter = 0;

// delay function
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

// animation going right
var animationForward =  () => {
    card.style.opacity = '0';
    card.style.animation = 'slideRight 0.5s ease-in-out';
    counter++;
    // waiting for the animation to finish
    delay(1000).then(() => {
        // changing data
        card.children[0].src = photos[counter%photos.length];
        card.children[1].innerText = names[counter%names.length];
        card.children[2].innerText = position[counter%position.length];
        // animation to bring the card back
        card.style.animation = 'slideRightFromLeft 0.5s ease-in-out';
        card.style.opacity = '1';
    }
    );
}

// animation going left
var animationBackward =  () => {
    card.style.opacity = '0';
    card.style.animation = 'slideLeft 0.5s ease-in-out';
    counter--;
    if(counter < 0) counter = 2;
    // waiting for the animation to finish
    delay(1000).then(() => {
        // changing data
        card.children[0].src = photos[counter%photos.length];
        card.children[1].innerText = names[counter%names.length];
        card.children[2].innerText = position[counter%position.length];
        // animation to bring the card back
        card.style.animation = 'slideLeftFromRight 0.5s ease-in-out';
        card.style.opacity = '1';
    }
    );
}

var random = () => {
    // getting random index
    var index = Math.floor(Math.random() * 3);
    // fading out
    card.style.opacity = '0';
    // delay for the animation to finish
    delay(1000).then(() => {
        // changing data
        card.children[0].src = photos[index];
        card.children[1].innerText = names[index];
        card.children[2].innerText = position[index];
        // fading in
        card.style.opacity = '1';
    }
    );
}


// adding event listeners to the buttons
rightButton.addEventListener("click", animationForward);
leftButton.addEventListener("click", animationBackward);
randomButton.addEventListener("click", random);
