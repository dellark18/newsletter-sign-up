function submit() {
    const email = getElementById("email").value;
    var regEx = /\S+@\S+\.\S+/;
    if (regEx.test(email)) {
        document.getElementById("errorNotification").textContent = "Correct email";
    } else {
        document.getElementById("errorNotification").textContent = "Valid email required"
        errorNotification.toggleAttribute("hidden");
    }
}
