let list = document.getElementById('list');
let add = document.getElementById('add');
let remove = document.getElementById('remove');

let count = 0;

function addElement() {
    count += 1;
    let li = document.createElement('li');
    li.innerHTML = 'item ' + count;
    list.appendChild(li);
}

function removeElement() {
    list.removeChild(list.firstElementChild);
    count -= 1;
}

add.addEventListener('click', addElement);
remove.addEventListener('click', removeElement);