// DOC API variables
let propagationButton = document.getElementById("propagation");
let resetButton = document.getElementById("reset");
let changeButton = document.getElementById("change");

let score = document.getElementById("score");

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

//Booleans for supervising current states and counter variable
var propagationState = true;
var bubbling = false;
var div2disabled = false;
var div3disabled = false;
var counter = 0;

// Initialization of text variables
propagationButton.innerText = "Stop Propagation";
score.innerText = counter;

// function managing propagation and the button text
const propagation = () => {
    if(propagationState)
    {
        propagationState = false;
        propagationButton.innerText = "Start Propagation";
        alert("Wyłączyłeś propagację");
    }
    else
    {
        propagationState = true;
        propagationButton.innerText = "Stop Propagation";
        alert("Włączyłeś propagację");
    }
}

// reset function
const reset = () => {
    // resetting variables
    counter = 0;
    score.innerText = counter;
    propagationState = true;
    bubbling = false;
    propagationButton.innerText = "Stop Propagation";
    div2disabled = false;
    div3disabled = false;
    // changing back the background colors of divs to normal
    div2.style.backgroundColor = "rgb(255, 0, 0)";
    div3.style.backgroundColor = "rgb(255, 255, 0)";
    // removing all possible events
    div1.removeEventListener("click", add1, bubbling);
    div1.removeEventListener("click", add1, !bubbling);
    div2.removeEventListener("click", add2, bubbling)
    div2.removeEventListener("click", add2, !bubbling)
    div3.removeEventListener("click", add5, bubbling);
    div3.removeEventListener("click", add5, !bubbling);
    // adding basic events
    div1.addEventListener("click", add1, bubbling);
    div2.addEventListener("click", add2, bubbling);
    div3.addEventListener("click", add5, bubbling);
}

// Add 1 function for div1
const add1 = (event) => {
    if(!propagationState) event.stopPropagation();
    counter += 1;
    score.innerText = counter;
    alert("nacisnąłeś niebieski o wartości 1");
    // checking if div2 or div3 should be disabled
    if(counter > 30 && !div2disabled) disableDiv2();
    if(counter > 50 && !div3disabled) disableDiv3();
}

// Add 2 function for div2
const add2 = (event) => {
    if(!propagationState) event.stopPropagation();
    counter += 2;
    score.innerText = counter;
    alert("nacisnąłeś czerwony o wartości 2");
    // checking if div2 or div3 should be disabled
    if(counter > 30 && !div2disabled) disableDiv2();
    if(counter > 50 && !div3disabled) disableDiv3();
}

// Add 5 function for div3
const add5 = (event) => {
    if(!propagationState) event.stopPropagation();
    counter += 5;
    score.innerText = counter;
    alert("nacisnąłeś żółty o wartości 5");
    // checking if div2 or div3 should be disabled
    if(counter > 30 && !div2disabled) disableDiv2();
    if(counter > 50 && !div3disabled) disableDiv3();
}

// Function for managing directions of propagation
const changeDirection = () => { 
    bubbling = !bubbling; 
    // removing old events
    div1.removeEventListener("click", add1, !bubbling);
    if(!div2disabled) div2.removeEventListener("click", add2, !bubbling);
    if(!div3disabled) div3.removeEventListener("click", add5, !bubbling);
    // adding new events with changed direction
    div1.addEventListener("click", add1, bubbling);
    if(!div2disabled) div2.addEventListener("click", add2, bubbling);
    if(!div3disabled) div3.addEventListener("click", add5, bubbling);
    alert("Zmieniłeś kierunek propagacji");
}

// Disabler for div2
const disableDiv2 = () => {
    // removing click events
    div2.removeEventListener("click", add2, bubbling)
    div2.removeEventListener("click", add2, !bubbling)
    // adding default event
    div2.addEventListener("click", onClick);
    // changing background color
    div2.style.backgroundColor = "rgb(174, 94, 94)";
    div2disabled = true;
}

// Disabler for div3
const disableDiv3 = () => {
    // removing click events
    div3.removeEventListener("click", add5, bubbling)
    div3.removeEventListener("click", add5, !bubbling)
    // adding default event
    div3.addEventListener("click", onClick);
    // changing background color
    div3.style.background = "rgb(168, 168, 99)";
    div3disabled = true;
}

const onClick = () => {}

// Program initialization - setting up basic events
div1.addEventListener("click", add1, bubbling);
div2.addEventListener("click", add2, bubbling);
div3.addEventListener("click", add5, bubbling);
resetButton.addEventListener("click", reset);
propagationButton.addEventListener("click", propagation);
changeButton.addEventListener("click", changeDirection);
