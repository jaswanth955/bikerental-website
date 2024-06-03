document.querySelector("form").addEventListener("submit", signIn);

function signIn(event) {
    event.preventDefault(); 

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pass").value;
    var storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

    var userExists = storedUsers.some(function(user) {
        return user.email === email && user.pass === password;
    });

    if (userExists) {
        alert("Sign In Successful");
        window.open("uidproject.html", "_self");
    } else {
        alert("Invalid email or password");
    }
}
