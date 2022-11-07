// getting add section elements with document API
let addButton = document.getElementById("add");
let nameForm = document.getElementById('name');
let phoneForm = document.getElementById('phone');
let list = document.getElementById('list');

var nameToAdd = '';
var phoneToAdd = '';
var nameSchemeWithMinus = /^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}[-]{1}[A-Z]{1}[a-z]{1,}$/;
var nameScheme = /^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/;
var phone9digit = /^(?:\s*\d){9}$/;
var phoneWithPlus = /^(?:\s*\+){1}(?:\s*\d){12}$/;

const addContact = () => {
    // checking if the inputs are correct

    // getting inputs values
    if(!(nameSchemeWithMinus.test(nameForm.value) || nameScheme.test(nameForm.value))) {
        alert("Niepoprawne imię i nazwisko");
        return;
    }
    if (!(phone9digit.test(phoneForm.value) || phoneWithPlus.test(phoneForm.value))) {
        alert("Niepoprawny numer telefonu");
        return;
    }
    nameToAdd = nameForm.value;
    phoneToAdd = phoneForm.value;
    // creating a list element
    var li = document.createElement('li');
    var liContainer = document.createElement('div');
    liContainer.classList.add('li-container');
    var textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    var strong = document.createElement('strong');
    var name = document.createElement('p');
    name.innerText = nameToAdd;
    strong.appendChild(name);
    var phone = document.createElement('p');
    phone.innerText = phoneToAdd;
    textContainer.appendChild(strong);
    textContainer.appendChild(phone);
    var img = document.createElement('img');
    img.src = 'bin.png';
    var button = document.createElement('button');
    button.classList.add('bin');
    button.appendChild(img);
    button.addEventListener('click', removeContact);
    liContainer.appendChild(textContainer);
    liContainer.appendChild(button);
    li.appendChild(liContainer);
    list.appendChild(li);
    // clearing inputs
    nameForm.value = '';
    phoneForm.value = '';
}

const removeContact = (event) => {
    var li = event.target.parentNode.parentNode.parentNode;
    list.removeChild(li);
}


// initializing the add button
addButton.addEventListener('click', addContact);
// removeButton.addEventListener('click', removeContact);