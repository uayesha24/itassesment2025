function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/;
    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    alert("Form is successfully submitted!");
    return true;
}
