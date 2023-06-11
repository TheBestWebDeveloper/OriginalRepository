function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comments = document.getElementById("comments").value;
  var letters = /^[A-Za-z]+$/;
  var errorDiv = document.getElementById("errorDiv");
  errorDiv.innerHTML = "";
  var isValid = true;
  if (name == "" || email == "" || comments == "") {
      errorDiv.innerHTML += "Please fill in all fields.<br>";
      isValid = false;
  }
  if (!name.match(letters)) {
      errorDiv.innerHTML += "Please enter letters only in the name field.<br>";
      isValid = false;
  }
  if (email.indexOf("@") == -1) {
      errorDiv.innerHTML += "Please enter a valid email address.<br>";
      isValid = false;
  }
  return isValid;
}
