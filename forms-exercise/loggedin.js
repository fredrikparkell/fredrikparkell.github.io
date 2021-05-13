let currentAddress = window.location.href;

let currentURL = new URL(window.location.href);

let searchParams = new URLSearchParams(currentURL.search);

let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let emailA = searchParams.get("emailA");
let dateO = searchParams.get("dateO");
let gender = searchParams.get("gender");

console.log(fname);
console.log(lname);
console.log(emailA);
console.log(dateO);
console.log(gender);

document.write("<p>" + fname + "</p>" + "<br>" + "<p>" + lname + "</p>" + "<br>" + "<p>" + emailA + "</p>" + "<br>"
            + "<p>" + dateO + "</p>" + "<br>" + "<p>" + gender + "</p>" + "<br>")