// getting html elements with DOC API
let olTaskA = document.getElementById('ol-task-a');
let olTaskB = document.getElementById('ol-task-b');
let resultC = document.getElementById('task-c-result');
let olTaskD = document.getElementById('ol-task-d');
let resultE = document.getElementById('task-e-result');
let resultF = document.getElementById('task-f-result');
let resultG = document.getElementById('task-g-result');
let resultG2 = document.getElementById('task-g-result2');

// reading json and executing functions
const readJson = () => {
    // http://localhost:3000
    fetch('http://localhost:3000/cities')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.cities = json;
        this.citiesSortedByDensity = [...json];
        citiesSortedByDensity.sort((a, b) => {
            return b.dentensity - a.dentensity;
        });
        console.log(this.citiesSortedByDensity);
        console.log(this.cities);
        zadA();
        zadB();
        zadC();
        zadD();
        zadE();
        zadF();
        zadG();
    })
    .catch(function () {
        this.dataError = true;
    })
}

// functions for every task

const zadA = () => {
    for (var i = 0; i < this.cities.length; i++) {
        if(this.cities[i].province == "małopolskie") {
            let li = document.createElement('li');
            li.innerHTML = this.cities[i].name;
            olTaskA.appendChild(li);
        }
    }
}

// rozumiem polecenie jako przynajmniej dwa znaki 'a'
const zadB = () => {
    for (var i = 0; i < this.cities.length; i++) {
        if(this.cities[i].name.match(/a{1}[b-z]{0,}a{1}/)) {
            let li = document.createElement('li');
            li.innerHTML = this.cities[i].name;
            olTaskB.appendChild(li);
        }
    }
}

const zadC = () => {
    resultC.innerText = this.citiesSortedByDensity[4].name;
}

const zadD = () => {
    for (var i=0; i < this.cities.length; i++) {
        if(this.cities[i].people > 100000) {
            let li = document.createElement('li');
            li.innerHTML = this.cities[i].name + " city";
            olTaskD.appendChild(li);
        }
    }
}

const zadE = () => {
    let lessCounter = 0;
    let moreCounter = 0;
    for (var i = 0; i < this.cities.length; i++) {
        if(this.cities[i].people > 80000) {
            moreCounter++;
        } else lessCounter++;
    }
    resultE.innerText = "Ilość miast z liczbą mieszkańców ponad 80000: " + moreCounter + "\n Ilość miast z liczbą mieszkańców równą bądź mniejszą od 80000: " + lessCounter + "\n A więc więcej jest miast z liczbą nieprzekraczającą 80000";
}

const zadF = () => {
    let counter = 0;
    let sum = 0;
    for (var i = 0; i < this.cities.length; i++) {
        if(this.cities[i].township[0] = "P") {
            counter++;
            sum += this.cities[i].area;
        }
    }
    resultF.innerText = "Średnia powierzchnia miast z powiatów rozpoczynających się na literę P wynosi: " + sum/counter;
}

const zadG = () => {
    let all = true;
    let counter = 0;
    for (var i = 0; i < this.cities.length; i++) {
        if(this.cities[i].province == "pomorskie") {
            counter++;
            if(this.cities[i].people < 5000) all = false;
        }
    }
    if(all) resultG.innerText = "Wszystkie miasta z województwa pomorskiego mają więcej niż 5000 mieszkańców";
    else resultG.innerText = "Nie wszystkie miasta z województwa pomorskiego mają więcej niż 5000 mieszkańców";
    resultG2.innerText = "Ilość miast z województwa pomorskiego z liczbą mieszkańców powyżej 5000: " + counter;
}

readJson();