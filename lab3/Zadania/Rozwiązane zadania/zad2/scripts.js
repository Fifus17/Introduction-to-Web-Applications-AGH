let image = document.getElementById('img');
let button = document.getElementById('button');
let photos = ['landscape1.webp', 'landscape2.jpeg', 'landscape3.jpeg'];
let styles = ['red', 'green', 'blue'];
let index = 0;

function changeImage() {
    index += 1;
    image.setAttribute("src", photos[index % photos.length]);
    image.style.border = `5px solid ${styles[index % styles.length]}`;
}

button.addEventListener('click', changeImage);