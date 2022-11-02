function name() {
    let person = prompt('Podaj imię');
    if(person != null) {
        document.getElementById('text').innerText = 
        'Witaj ' + person + '!';
    }
}

let button = document.getElementById('button');
button.addEventListener('click', name);
