// for popup button


function firstnamestore() {
    var inputfirstname = document.getElementById("firstname");
    localStorage.setItem("firstname", inputfirstname.value);
}

function middlenamestore() {
    var inputmiddlename = document.getElementById("middlename");
    localStorage.setItem("middlename", inputmiddlename.value);
}

function lastnamestore() {
    var inputlastname = document.getElementById("lastname");
    localStorage.setItem("lastname", inputlastname.value);
}

function dobstore() {
    var inputDOB = document.getElementById("dob");
    localStorage.setItem("dob", inputDOB.value);
}


function contactstore() {
    var inputContact = document.getElementById("contact");
    localStorage.setItem("contact", inputContact.value);
}

function emailstore() {
    var inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
}

function passwordstore() {
    var inputPassword = document.getElementById("password");
    localStorage.setItem("password", inputPassword.value);
}

function conformpasswordstore() {
    var inputConformpassword = document.getElementById("conformpassword");
    localStorage.setItem("conformpassword", inputConformpassword.value);
}

function streetstore() {
    var inputStreet = document.getElementById("street");
    localStorage.setItem("street", inputStreet.value);
}

function citystore() {
    var inputCity = document.getElementById("city");
    localStorage.setItem("city", inputCity.value);
}

function statestore() {
    var inputState = document.getElementById("state");
    localStorage.setItem("state", inputState.value);
}

function countrystore() {
    var inputState = document.getElementById("country");
    localStorage.setItem("country", inputState.value);
}