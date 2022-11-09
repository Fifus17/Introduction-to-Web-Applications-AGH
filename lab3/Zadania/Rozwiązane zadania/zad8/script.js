let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");

var requirement1 = /(?=.{8,})/;
var requirement2 = /([^A-Za-z0-9])/;
var requirement3 = /(?=.*[A-Z])/;
var requirement4 = /(?=.*[0-9])/;

let timeout;


const checkIdentity = () => {
    if(!(requirement1.test(input1.value)  && requirement2.test(input1.value) && requirement3.test(input1.value) && requirement4.test(input1.value))) {
        alert("Requirements are not met");
        return;
    }
    if(input1.value == input2.value) {
        alert("Change submitted")
        input1.value = "";
        input2.value = "";
        img1.src = "remove.png";
        img2.src = "remove.png";
        img3.src = "remove.png";
        img4.src = "remove.png";
    }
    else alert("Submitted passwords are not the same")
}

const checkStrength = () => {
    if(requirement1.test(input1.value)) {
        img1.src = "check.png";
    } else img1.src = "remove.png";
    if(requirement2.test(input1.value)) {
        img2.src = "check.png";
    } else img2.src = "remove.png";
    if (requirement3.test(input1.value)) {
        img3.src = "check.png";
    } else img3.src = "remove.png";
    if (requirement4.test(input1.value)) {
        img4.src = "check.png";
    } else img4.src = "remove.png";
}

const showPassword = (event) => {
    if(event.target.parentNode.previousElementSibling.type == "password") {
        event.target.src = "hide.png";
        event.target.parentNode.previousElementSibling.type = "text";
    } else {
        event.target.src = "show.png";
        event.target.parentNode.previousElementSibling.type = "password";
    }
}

eye1.addEventListener("click", showPassword);
eye2.addEventListener("click", showPassword);
submit.addEventListener("click", checkIdentity);
input1.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => checkStrength(), 500)
})