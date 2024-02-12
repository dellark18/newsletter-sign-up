let emailField = document.getElementById("email-field");
let errorEmail = document.getElementById("error-email");

function validateEmail() {
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.textContent = "Valid email required";
        emailField.style.borderColor = "red";
        emailField.style.backgroundColor = "#FFCCCB"
        return false;
    } else
    errorEmail.textContent = "";
    errorEmail.style.color = "green"
    emailField.style.borderColor = "green"
    emailField.style.backgroundColor = "#90EE90"
    return true;
}