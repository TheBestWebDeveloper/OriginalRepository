function validateForm() {
var errorMessages = "";
var validFirstName = false;
var firstName = document.getElementById("FirstName").value;
var validLastName = false;
var lastName = document.getElementById("LastName").value;
var validEmail = false;
var email = document.getElementById("Email").value;
var validPhone = false;
var phone = document.getElementById("Phone").value;
var validUsername = false;
var username = document.getElementById("Username").value;
var validPassword = false;
var password = document.getElementById("Password").value;
var validAddress = false;
var address = document.getElementById("Address").value;
var validCity = false;
var city = document.getElementById("City").value;
var validState = false;
var state = document.getElementById("State").value;
var validCountry = false;
var country = document.getElementById("Country").value;
var validZipcode = true;
var zipcode = document.getElementById("Zipcode").value;

if (firstName === "null" || firstName === "" || !/^[a-zA-Z]*$/g.test(firstName) || firstName.length >20) {
errorMessages += "<p>First name should accept only alphabetical value, maximum 20 characters, and must be filled in.</p>";
validFirstName=false; 
} else {
validFirstName=true; 
}

if (lastName === "null" || lastName === "" || !/^[a-zA-Z]*$/g.test(lastName) || lastName.length >50) {
errorMessages += "<p>Last naem must be filled in, should accept only alphabetical value, maximum 50 characters.</p>";
validLastName=false; 
} else {
validLastName=true; 
}

if (email === "null" || email === "" || email.indexOf("@") == -1) {
errorMessages += "<p>Email must be filled in and must be a valid email.</p>";
validEmail=false; 
} else {
validEmail=true; 
}

if (phone === "null" || phone === "" || isNaN(phone) || phone.length >15) {
errorMessages += "<p>Phone must be filled in with a maximum of fifteen numerical digits and it is required to be filled in.</p>";
validPhone=false; 
} else {
validPhone=true; 
}

if (username === "null" || username === "" || username.length >12) {
errorMessages += "<p>Username must be filled in with a maximum of 12 characters.</p>";
validUsername=false; 
} else {
validUsername=true; 
}

if (password === "null" || password === "" || password.length >=7) {
errorMessages += "<p>Password must be filled in, maximum 7 characters</p>";
validPassword=false; 
} else {
validPassword=true; 
}

if (address === "null" || address === "") {
  errorMessages += "<p>Address is required to be filled in.</p>";
  validAddress = false;
} else {
  validAddress = true;
}

if (city === "null" || city === "") {
  errorMessages += "<p>City must be filled in.</p>";
  validCity = false;
} else {
  validCity = true;
}

if (state === "null" || state === "") {
  errorMessages += "<p>State must be selected from dropdown.</p>";
  validState = false;
} else {
  validState = true;
}

if (country === "null" || country === "" || country === "000") {
  errorMessages += "<p>Country must be selected from dropdown.</p>";
  validCountry = false;
} else {
  validCountry = true;
}

if (country === "USA") {
if (zipcode === "null" || zipcode === "" || zipcode.length >5) {
    errorMessages += "<p>Zipcode must be filled in with a maximum of five digits.</p>";
    validZipcode=false; 
} else {
    validZipcode=true; 
}
}

document.getElementById("errorMessages").innerHTML=errorMessages;

return(validFirstName &&validLastName &&validEmail &&validPhone &&validUsername &&validPassword &&validAddress &&validCity &&validState &&validCountry &&validZipcode);
}
