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

    let newPlayerCountryElement = document.createElement('td');
    newPlayerCountryElement.innerText = randomCountry();

    let newPlayerNameElement = document.createElement('td');
    newPlayerNameElement.innerText = randomName(newPlayerCountryElement.innerText);
    newPlayerNameElement.innerHTML = newPlayerNameElement.innerHTML.replace("<br>", "");
    newPlayerNameElement.innerHTML = newPlayerNameElement.innerHTML.replace("<br>", "");
    console.log(newPlayerNameElement.innerHTML);
    console.log(newPlayerNameElement.innerText);

    let newPlayerPotentialElement = document.createElement('td');
    newPlayerPotentialElement.innerText = randomInt(200, 135);

    let newPlayerPositionsElement = document.createElement('td');
    newPlayerPositionsElement.innerText = randomPositions();

    player_list.push([newPlayerNameElement.innerText, newPlayerCountryElement.innerText, newPlayerPotentialElement.innerText, newPlayerPositionsElement.innerText]);
    
    newPlayerTR.appendChild(newPlayerNameElement);
    newPlayerTR.appendChild(newPlayerCountryElement);
    newPlayerTR.appendChild(newPlayerPotentialElement);
    newPlayerTR.appendChild(newPlayerPositionsElement);
}

function randomName(countryName){
    let firstName = readTextFile("./names/" + countryName + "-firstnames.txt");
    let lastName = readTextFile("./names/" + countryName + "-lastnames.txt");
    console.log(firstName);
    console.log(lastName);
    console.log(firstName + " " + lastName);

    return firstName + " " + lastName;
}

function readTextFile(file){
    let name;
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", file, false);
    txtFile.onreadystatechange = function ()
    {
        if(txtFile.readyState === 4)
        {
            if(txtFile.status === 200 || txtFile.status == 0)
            {
                var result = txtFile.responseText;
                let arr = result.split("\n");
                name = randomNamePicker(arr);
                console.log(name);
            }
        }
    }
    txtFile.send(null);
    return name;
}

function randomNamePicker(array){
    let isTrue = false;
    let name;
    while (isTrue != true) {
        name = array[randomInt(array.length-1,0)];
        if (name != ""){
            isTrue = true;
        }
    }
    return name;
}

function randomCountry() {
    let country_list = ["Afghanistan","Albanien","Algeriet","Amerikanska Jungfruöarna","Amerikanska Samoa","Andorra",
    "Angola","Anguilla","Antigua och Barbuda","Argentina","Armenien","Aruba",
    "Australien","Azerbajdzjan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgien","Belize","Benin","Bermuda","Bhutan","Bolivia",
    "Bonaire","Bosnien","Botswana","Brasilien","Brittiska Jungfruöarna","Brunei","Bulgarien","Burkina Faso","Burundi",
    "Caymanöarna","Centralafrikanska republiken",
    "Chile","Colombia","Cooköarna","Costa Rica","Curacao","Cypern",
    "Danmark","Djibouti","Dominica","Dominikanska Republiken","Ecuador","Egypten","Ekvatorialguinea","El Salvador",
    "Elfenbenskusten","England","Eritrea","Estland","Etiopien","Fiji","Filippinerna","Finland","Frankrike","Franska Guyana",
    "Färöarna","Förenade Arabemiraten","Gabon","Gambia",
    "Georgien","Ghana","Gibraltar","Grekland","Grenada","Guadeloupe","Guam","Guatemala","Guinea Bissau","Guinea","Guyana","Haiti","Holland",
    "Honduras","Hong Kong","Indien","Indonesien","Irak","Iran","Irland","Island","Israel","Italien","Jamaica","Japan","Jemen",
    "Jordanien","Kambodja","Kamerun","Kanada","Kap Verde","Kazakhstan","Kenya","Kina","Kinesiska Taipei","Kirgizistan",
    "Kiribati","Komorerna","Kongo DR","Kongo","Kosovo","Kroatien","Kuba","Kuwait",
    "Laos","Lesotho","Lettland","Libanon","Liberia","Libyen","Liechtenstein","Litauen",
    "Luxemburg","Macao","Madagaskar","Malawi","Malaysia","Maldiverna","Mali","Malta","Marocko","Martinique",
    "Mauretanien","Mauritius","Mayotte","Mexiko","Mikronesien","Mocambique","Moldavien","Mongoliet",
    "Montenegro","Montserrat","Myanmar","Namibia","Nepal","Nicaragua","Niger","Nigeria",
    "Nordirland","Nordkorea","Nordmakedonien","Norge","Norra Marianaöarna","Nya Kaledonien","Nya Zeeland","Oman",
    "Pakistan","Palestina","Panama","Papua Nya Guinea","Paraguay","Peru","Polen","Portugal",
    "Puerto Rico","Qatar","Reunion","Rumänien","Rwanda","Ryssland",
    "Saint Barthelemy","Saint Kitts och Nevis","Saint Lucia","Saint Martin","Saint Pierre och Miquelon","Saint Vincent","Salomonöarna",
    "San Marino","Sao Tome","Saudiarabien","Schweiz","Senegal","Serbien","Seychellerna",
    "Sierra Leone","Singapore","Sint Maarten","Skottland","Slovakien","Slovenien",
    "Somalia","Spanien","Sri Lanka","Sudan","Surinam","Sverige","Swaziland","Sydafrika","Sydkorea","Sydsudan",
    "Syrien","Tadzjikistan","Tahiti","Tanzania","Tchad","Thailand","Tjeckien","Togo","Tonga","Trinidad och Tobago","Tunisien",
    "Turkiet","Turkmenistan","Turks och Caicosöarna","Tuvalu","Tyskland","Uganda","Ukraina","Ungern","Uruguay","USA",
    "Uzbekistan","Vanuatu","Venezuela","Vietnam","Västra Samoa","Wales","Wallis och Futunaöarna","Zambia","Zanzibar","Zimbabwe","Österrike","Östtimor"];

    return country_list[randomInt(0,country_list.length-1)];
}

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomPositions() {
    let positions_list = ["MV", "HB", "HYB", "MB", "VYB", "VB", "CDM", "CM", "COM", "HM", "HY", "VM", "VY", "FWD",
    "MV", "HB", "HYB", "MB", "VYB", "VB", "CDM", "CM", "COM", "HM", "HY", "VM", "VY", "FWD",
    "MV", "HB", "HYB", "MB", "VYB", "VB", "CDM", "CM", "COM", "HM", "HY", "VM", "VY", "FWD",
    "MV", "HB", "HYB", "MB", "VYB", "VB", "CDM", "CM", "COM", "HM", "HY", "VM", "VY", "FWD",];

    return positions_list[randomInt(0,positions_list.length-1)];
}

function saveToCSV() {
    let csv = 'name,country,potential,positions\n';

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