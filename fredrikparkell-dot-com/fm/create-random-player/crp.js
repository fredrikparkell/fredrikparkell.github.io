// GLOBAL SCOPE VARIABLES //

const container = document.getElementById('playerContainer');
const player_list = [];

//--------------------------------//

// EVENT LISTENERS FOR TAGS //

document.querySelector('.genBtn').addEventListener("click", async function () {
    generatePlayer();
})

document.querySelector('.clearBtn').addEventListener("click", async function () {
    player_list.length = 0;
    location.reload();
})

document.querySelector('.saveBtn').addEventListener("click", async function () {
    console.log(player_list.length)
    if(player_list.length != 0){
        saveToCSV();
    }
})

document.addEventListener('keydown', async function (event) {
    if(event.key === 'Enter') {
        document.querySelector(".genBtn").click();
    }
})

//--------------------------------//

// FUNCTIONS //

function generatePlayer() {
    //read from file with the country-names?
    //randomize a number between 135-200
    //read from file with the positions - possible to get more than one position? + how good (15-20) on the position

    let newPlayerTR = document.createElement('tr');

    container.prepend(newPlayerTR);

    let newPlayerCountry = document.createElement('td');
    newPlayerCountry.innerText = randomCountry();

    let newPlayerPotential = document.createElement('td');
    newPlayerPotential.innerText = randomInt(200, 135);

    let newPlayerPositions = document.createElement('td');
    newPlayerPositions.innerText = randomPositions();

    player_list.push([newPlayerCountry.innerText, newPlayerPotential.innerText, newPlayerPositions.innerText]);
    
    newPlayerTR.appendChild(newPlayerCountry);
    newPlayerTR.appendChild(newPlayerPotential);
    newPlayerTR.appendChild(newPlayerPositions);
}

function randomCountry() {
    //195 countries as of 2nd august 2021 in this list
    let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba",
    "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
    "Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon",
    "Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia",
    "Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
    "Estonia","Ethiopia","Faroe Islands","Fiji","Finland","France","Gabon","Gambia",
    "Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guam","Guatemala","Guinea","Guinea Bissau","Guyana","Haiti",
    "Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
    "Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
    "Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
    "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Caledonia","New Zealand",
    "Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Saudi Arabia","Senegal",
    "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia",
    "St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo",
    "Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay",
    "Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    return country_list[randomInt(0,194)];
}

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomPositions() {
    let positions_list = ["GK", "RB", "RWB", "CB", "LWB", "LB", "CDM", "CM", "COM", "RM", "RW", "LM", "LW", "ST",
    "GK", "RB", "RWB", "CB", "LWB", "LB", "CDM", "CM", "COM", "RM", "RW", "LM", "LW", "ST",
    "GK", "RB", "RWB", "CB", "LWB", "LB", "CDM", "CM", "COM", "RM", "RW", "LM", "LW", "ST",
    "GK", "RB", "RWB", "CB", "LWB", "LB", "CDM", "CM", "COM", "RM", "RW", "LM", "LW", "ST"];

    return positions_list[randomInt(0,51)];
}

function saveToCSV() {
    let csv = 'country,potential,positions\n';

    player_list.forEach(function(row) {  
        csv += row.join(',');  
        csv += "\n";  
    });

    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
      
    let mydate = new Date();
    let dateString = '-' + mydate.getFullYear() + '-' + (mydate.getMonth() + 1) + '-' + mydate.getDate() + '-' + mydate.getHours() + "-" + mydate.getMinutes() + "-" + mydate.getSeconds();

    hiddenElement.download = 'createdRandomPlayers' + dateString + '.csv';  
    hiddenElement.click();

    player_list.length = 0; // could remove this to let the person still have access to what was on the page
    location.reload(); // could remove this to let the person still have access to what was on the page
}