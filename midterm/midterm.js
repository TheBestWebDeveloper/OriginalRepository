function validateForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var comments = document.getElementById("comments").value;
var letters = /^[A-Za-z]+$/;
if (name == "" || email == "" || comments == "") {
alert("Please fill in all fields.");
return false;
}
if (!name.match(letters)) {
alert("Please enter letters only in the name field.");
return false;
}
if (email.indexOf("@") == -1) {
alert("Please enter a valid email address.");
return false;
}
return true;
}
