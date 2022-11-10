let field = document.getElementById('field');
let ball = document.getElementById('ball');
let body = document.body;

var ballPositionX = 0;
var ballPositionY = 0;
var ballRadius = ball.offsetWidth / 2;

var bodyClicked = (event) => {
    event.stopPropagation();
    alert("Ball can't go outside the field!");
}

var fieldClicked = (event) => {
    event.stopPropagation();
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    if(offsetX < ballRadius) offsetX = ballRadius;
    if(offsetY < ballRadius) offsetY = ballRadius;
    if(offsetX > field.offsetWidth - ballRadius) offsetX = field.offsetWidth - ballRadius;
    if(offsetY > field.offsetHeight - ballRadius) offsetY = field.offsetHeight - ballRadius;
    ball.style.top = offsetY - ballRadius + 'px';
    ball.style.left = offsetX - ballRadius + 'px';
}

body.addEventListener('click', bodyClicked);
field.addEventListener('click', fieldClicked);