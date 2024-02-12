let emailField = document.getElementById("email-field");
let errorEmail = document.getElementById("error-email");
let btn1 = document.getElementById("btn1")
let emailInput = document.getElementById("email-input")
let popup = document.getElementById("popup")

function submit() {
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.textContent = "Valid email required";
        emailField.style.borderColor = "red";
        emailField.style.backgroundColor = "#FFCCCB"
        return false;
    } else
    popup.classList.add("open-popup");
    errorEmail.textContent = "";
    return true;
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function input() {
    emailInput.textContent = emailField.value;
    emailInput.style.fontWeight = "bold";
    emailInput.style.color = "#242742";
}

btn1.addEventListener('click',input);