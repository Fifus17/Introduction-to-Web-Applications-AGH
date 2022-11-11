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
    var offsetX = event.clientX;
    var offsetY = event.clientY;
    // 8 is the margin of the field
    if(offsetX < ballRadius) offsetX = ballRadius + 8;
    if(offsetY < ballRadius) offsetY = ballRadius + 8;
    if(offsetX > field.offsetWidth - ballRadius) offsetX = field.offsetWidth - ballRadius + 8;
    if(offsetY > field.offsetHeight - ballRadius) offsetY = field.offsetHeight - ballRadius + 8;
    ball.style.top = offsetY - 8 - ballRadius + 'px';
    ball.style.left = offsetX - 8 - ballRadius + 'px';
}

body.addEventListener('click', bodyClicked);
field.addEventListener('click', fieldClicked);