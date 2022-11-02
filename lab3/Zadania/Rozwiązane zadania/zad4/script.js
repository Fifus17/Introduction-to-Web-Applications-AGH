let check = false;
let counter = 0;
let text = document.getElementById('text');

function increment() {
    if (check) {
        counter += 1;
        text.innerHTML = counter;
    }
}

function start() {
    check = true;
}

function stop() {
    check = false;
    text.innerHTML = "";
    counter = 0;
}

let test = document.getElementById('test');
let startbutton = document.getElementById('start');
let stopbutton = document.getElementById('stop');

test.addEventListener('click', increment);
startbutton.addEventListener('click', start);
stopbutton.addEventListener('click', stop);