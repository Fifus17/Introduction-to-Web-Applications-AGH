// Global variables
var pageLength = 10;
var currentPage = 0;

// Containers
let subregionsUL = document.getElementById("subregions");
let pageButtonsContainer = document.getElementById("pages-buttons-container");

// Buttons
let nameSortButton = document.getElementById("name");
let capitalSortButton = document.getElementById("capital");
let populationSortButton = document.getElementById("population");
let areaSortButton = document.getElementById("area");
let startFilterButton = document.getElementById("start-filter");
let clearFilterButton = document.getElementById("clear-filters");

// Inputs
let nameInput = document.getElementById("name-input");
let capitalInput = document.getElementById("capital-input");
let populationMinInput = document.getElementById("population-min");
let populationMaxInput = document.getElementById("population-max");
let areaMinInput = document.getElementById("area-min");
let areaMaxInput = document.getElementById("area-max");

// main function that reads data from the json file and runs other functions
const readJson = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        // saving data from json to the data array
        this.data = json;
        // creating subregions array
        this.subregions = [];
        // populating subregions array and sorting it alphabetically
        console.log(this.data);
        populatingSubregionsArray();
        this.subregions.sort((a, b) => (a.name > b.name));
        console.log(this.subregions);
        this.currentData = this.subregions;
        loadPage(this.currentData);
    })
    .catch(function () {
        this.dataError = true;
    })
}

// function for populating subregions array
const populatingSubregionsArray = () => {
    for (var i = 0; i < this.data.length; i++) {
        // checking if a subregion objest exists
        const a = this.subregions.findIndex(e => e.name === this.data[i].subregion);
        // if it does exist, add a country to the subregion
        if(a > -1) {
            // adding countries from this subregion to the array
            this.subregions[a].countries.push(this.data[i]);
            // adding country's population to the subregion's population
            this.subregions[a].population += this.data[i].population;
            // adding country's area to the subregion's area
            this.subregions[a].area += Math.floor(this.data[i].area);
        }
        // if it doesn't exist, create a new subregion object
        else 
         {
            // creating a new subregion object
            this.subregions.push({
                name: this.data[i].subregion,
                countries: [this.data[i]],
                population: this.data[i].population,
                area: Math.floor(this.data[i].area)
            });
        }
    }
    //changing name of undefined subregions to "No subregion"
    this.subregions[this.subregions.findIndex(i => i.name === undefined)].name = "Non-affiliated areas";
    // changing undefined capitals to ""
    // for(var i = 0; i < this.subregions.length; i++) {
    //     this.subregions[i].countries[this.subregions[i].countries.findIndex(id => id.capitalinfo === undefined)].push({capital: ""});
    // }
}

// function for creating table
const createTable = () => {
    var max = (currentPage + 1) * pageLength;
    if (max > this.currentData.length) {
        max = this.currentData.length;
    }
    for(var i = pageLength * currentPage; i < max; i++) {
        // creating html elements
        let li = document.createElement("li");
        li.id = i;
        let button = document.createElement("button");
        let img = document.createElement("img");
        let strong = document.createElement("strong");
        let population = document.createElement("p");
        let area = document.createElement("p");
        // adding data and classes to html elements
        img.src = "left.png"
        img.alt = "right arrow";
        strong.innerText = this.currentData[i].name;
        population.innerText = this.currentData[i].population;
        population.className = "subregion-population";
        area.className = "subregion-area";
        area.innerText = this.currentData[i].area;
        // apppending elements to the DOM
        button.appendChild(img);
        button.appendChild(strong);
        button.appendChild(population);
        button.appendChild(area);
        li.appendChild(button);
        // creating list of countries for each subregion
        button.addEventListener("click", manageList);
        subregionsUL.appendChild(li);
        subregionsUL.appendChild(createList(i));
    }
}

// function for creating list of countries for subregion
const createList = (i) => {
    // creating html elements
    let ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.id = "list" + i;
    // adding countries data to ul
    data = this.currentData[i].countries;
    for (var j = 0; j < data.length; j++) {
        let li = document.createElement("li");
        li.className = "list-li";
        li.id = data[j].name.common;
        let name = document.createElement("p");
        name.className = "name";
        let capital = document.createElement("p");
        capital.className = "capital";
        let population = document.createElement("p");
        population.className = "population";
        let area = document.createElement("p");
        area.className = "area";
        name.innerText =  data[j].flag + " " + data[j].name.common;
        capital.innerText = data[j].capital;
        if(data[j].capital === undefined) {
            capital.innerText = "";
            data[j].capitalInfo = {latlng: [0, 0]};
        }
        population.innerText = data[j].population;
        area.innerText = data[j].area;
        li.appendChild(name);
        li.appendChild(capital);
        li.appendChild(population);
        li.appendChild(area);
        ul.appendChild(li);
    }
    // returning ul
    return ul;

}

// function for managing buttons for changing pages
const PageButtonsManager = () => {
    // creating previous page button
    if (currentPage > 0) {
        let previousPageButton = document.createElement("button");
        previousPageButton.innerText = "Previous page";
        previousPageButton.className = "page-button";
        // adding functionality to the button (changing page counter and reloading page)
        previousPageButton.addEventListener("click", () => {currentPage--; loadPage();});
        pageButtonsContainer.appendChild(previousPageButton);
    }
    // creating next page button
    if (currentPage < this.currentData.length / pageLength - 1) {
        let nextPageButton = document.createElement("button");
        nextPageButton.innerText = "Next page";
        nextPageButton.className = "page-button";
        // adding functionality to the button (changing page counter and reloading page)
        nextPageButton.addEventListener("click",() => {currentPage++; loadPage();});
        pageButtonsContainer.appendChild(nextPageButton);
    }
}

// function for loading page
const loadPage = () => {
    // clearing the page
    subregionsUL.replaceChildren();
    pageButtonsContainer.replaceChildren();
    // creating table
    createTable();
    // creating page buttons
    PageButtonsManager();
    let max = (currentPage + 1) * pageLength;
    if (max > this.currentData.length) {
        max = this.currentData.length;
    }
    for(var i = currentPage * pageLength; i < max; i++) {
        // checking if a subregion is open
        if (this.currentData[i].isClicked) {
            // opening the subregion
            openList(i);
        }
    }
}

// function for managing lists
const manageList = (event) => {

    let id = event.target.parentElement.id;
    if(event.target.tagName != "BUTTON") id = event.target.parentElement.parentElement.id;
    // getting id of the list
    // if the list is already opened, close it
    if (this.currentData[id].isClicked == 1) {
        closeList(id);
    }
    // if the list is closed, open it
    else {
        openList(id);
    }
}

// function for closing the list
const closeList = (id) => {
    document.getElementById("list" + id).style.display = "none";
        this.currentData[id].isClicked = 0;
        document.getElementById(id).children[0].children[0].style.transform = "rotate(180deg)";
}

// function for opening the list
const openList = (id) => {
    document.getElementById("list" + id).style.display = "block";
        this.currentData[id].isClicked = 1;
        document.getElementById(id).children[0].children[0].style.transform = "rotate(270deg)";
}

// function ran on clicking filter button
const filterTable = () => {
    this.filteredData = [];
    let filter1 = false;
    let filter2 = false;
    let filter3 = false;
    let filter4 = false;
    let filter5 = false;
    let filter6 = false;
    let filteredData = [];
    // filtering data
    if(nameInput.value != "") filter1 = true;
    if(capitalInput.value != "") filter2 = true;
    if(populationMinInput.value != "") filter3 = true;
    if(populationMaxInput.value != "") filter4 = true;
    if(areaMinInput.value != "") filter5 = true;
    if(areaMaxInput.value != "") filter6 = true;
    if((isNaN(nameInput.value) || !filter1) && (isNaN(capitalInput.value) || !filter2) && (!isNaN(populationMinInput.value) || !filter3) && (!isNaN(populationMaxInput.value) || !filter4) && (!isNaN(areaMinInput.value) || !filter5) && (!isNaN(areaMaxInput.value)|| !filter6)) {
        for(var i = 0; i < this.subregions.length; i++) {
            let countries = [];
            for(var j = 0; j < this.subregions[i].countries.length; j++) {
                if(filter1) {
                    if (!(this.subregions[i].countries[j].name.common.toLowerCase().includes(nameInput.value.toLowerCase()))) break;
                }
                if(filter2) {
                    if(!this.subregions[i].countries[j].hasOwnProperty("capital")) break;
                    if(!(this.subregions[i].countries[j].capital[0].toLowerCase().includes(capitalInput.value.toLowerCase()))) break;
                }
                if(filter3) {
                    if (!(this.subregions[i].countries[j].population >= parseInt(populationMinInput.value))) break;
                }
                if(filter4) {
                    if (!(this.subregions[i].countries[j].population <= parseInt(populationMaxInput.value))) break;
                }
                if(filter5) {
                    if (!(this.subregions[i].countries[j].area >= parseInt(areaMinInput.value))) break;
                }
                if(filter6) {
                    if (!(this.subregions[i].countries[j].area <= parseInt(areaMaxInput.value))) break;
                }
                countries.push(this.subregions[i].countries[j]);
            }
            if(countries.length > 0) {
                filteredData.push({
                    name: this.subregions[i].name, 
                    countries: countries,
                    population: this.subregions[i].population,
                    area: this.subregions[i].area
                });
            }
        }
        console.log(filteredData);
        this.currentData = filteredData;
        loadPage();
    } else alert("Wrong input!");
}

// function for clearing the filters
const clearFilters = () => {
    nameInput.value = "";
    capitalInput.value = "";
    populationMinInput.value = "";
    populationMaxInput.value = "";
    areaMinInput.value = "";
    areaMaxInput.value = "";
    this.currentData = this.subregions;
    loadPage();
}

nameSortButton.addEventListener("click", () => {
    for(var i = 0; i < this.currentData.length; i++) {
        this.currentData[i].countries.sort((a, b) => (a.name.common > b.name.common));
    }
    loadPage();
});

capitalSortButton.addEventListener("click", () => {
    for(var i = 0; i < this.currentData.length; i++) {
        this.currentData[i].countries.sort((a, b) => (a.capital > b.capital));
    }
    loadPage();
});

populationSortButton.addEventListener("click", () => {
    for(var i = 0; i < this.currentData.length; i++) {
        this.currentData[i].countries.sort((a, b) => (a.population > b.population));
    }
    loadPage();
});

areaSortButton.addEventListener("click", () => {
    for(var i = 0; i < this.currentData.length; i++) {
        this.currentData[i].countries.sort((a, b) => (a.area > b.area));
    }
    loadPage();
});

startFilterButton.addEventListener("click", filterTable);
clearFilterButton.addEventListener("click", clearFilters);

readJson();
