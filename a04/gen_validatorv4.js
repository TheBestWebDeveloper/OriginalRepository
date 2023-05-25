function validateForm() {

  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;

  var validFirstname=false;
  var firstname = document.getElementById("FirstName").value;
  var validLastname=false;
  var lastname = document.getElementById("LastName").value;
  var validEmail=false;
  var email = document.getElementById("Email").value;
  var validPhone=false;
  var phone = document.getElementById("Phone").value;
  var password = doucment.getElementById("Password").value;
  var validPassword = false;

  if (firstname==="null" || firstname==="" || firstname.length >= 20 || myContact.firstname.value.match(letters)) {
    errorMessages += "<p>First name must be filled in with alphabetical values, and be less than 20 characters.</p>";
    validFirstname = false; 
  }
  validFirstname = true;

  if (lastname==="null" || lastname==="" || lastname.length >= 50 || myContact.lastname.value.match(letters)) {
    errorMessages += "<p> Last name must be filled in with alphabetical values, and be less than 50 characters.</p>";
    validLastname = false; 
  }
  validLastname = true;

  if (email==="null" || email==="") {
    errorMessages += "<p> Not a valid Email.</p>";
    validEmail = false; 
  }
  validEmail = true;

  if (phone==="null" || phone==="" || phone.length >= 15 || myContact.phone.value.match(numbers)) {
    errorMessages += "<p> Phone number must be less than 15 numerals.</p>";
    validPhone = false; 
  }
  validPhone = true;

if (password==="null" || 
    password==="" ||
   password.length >= 7) {
  errorMessages += "<p> The password must be less than 7 characters and it is required. </p>";
} else {
    validPassword = true;
}

  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validFirstname && validLastname && validEmail && validPhone && validPassword); 
}
