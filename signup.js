document.querySelector("form").addEventListener("submit", submitDetails);

var data = JSON.parse(localStorage.getItem("userDetails")) || [];

function submitDetails(event) {
    event.preventDefault();

    var Uemail = document.querySelector("#email").value;
    var Uphno = document.querySelector("#number").value;
    var Upass = document.querySelector("#pass").value;
    var UconfirmPass = document.querySelector("#confirmPass").value;

    if (Upass !== UconfirmPass) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    var obj = { email: Uemail, phno: Uphno, pass: Upass };
    data.push(obj);

    localStorage.setItem("userDetails", JSON.stringify(data));
    alert("SignUp Successful");
    window.open("signIn.html", "_self");
}
