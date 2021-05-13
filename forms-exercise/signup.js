function validateForm() // validates firstname, lastname and email atm. still need to add dateofbirth and the "checkboxes"
{
    let firstName = document.forms["signupform"]["fname"].value;
    let lastName = document.forms["signupform"]["lname"].value;
    if (firstName === "" || lastName === "") {
        alert("Name is not valid");
        return false;
    }

    let emailValid = validateEmail();
    if (!emailValid){
        alert("Email format is not valid");
        return false;
    }

    let dateValid = validateDate();
    if (!dateValid){
        alert("Date format is not valid");
        return false;
    }

    let genderValid = validateGender();
    if (!genderValid){
        return false;
    }
    
    return true;
}

function validateEmail() 
{
    let email = document.forms["signupform"]["emailA"].value;

    if(email == ""){
        return false;
    }

    const regexx = /^\S+@\S+[\.][0-9a-z]+$/;

    return regexx.test(email);
}

function validateDate()
{
    let dateofbirth = document.forms["signupform"]["dateO"].value;

    console.log(dateofbirth);

    if (dateofbirth == ""){
        return false;
    }

    let dateparts = dateofbirth.split("-")
    let year = parseInt(dateparts[0], 10)

    if(year < 1900 || year > 2100){
        return false;
    }

    return true;
}

function validateGender()
{
    let genderValue = document.forms["signupform"]["gender"].value;

    if (genderValue == ""){
        alert("You need to choose a gender");
        return false;
    }

    return true;
}