
// Explore More Button
function showMessage() {
    alert("Welcome to Student Learning Hub!");
}

// Signup Form
document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;

    if (name.trim() === "" || email.trim() === "" ||
        password === "" || course === "") {

        document.getElementById("result").innerHTML =
            "Please fill all the fields.";

    }
    else if (password.length < 6) {

        document.getElementById("result").innerHTML =
            "Password must contain at least 6 characters.";

    }
    else {

        document.getElementById("result").innerHTML =
            "Signup Successful! Welcome " + name;

        document.getElementById("signupForm").reset();
    }

});
