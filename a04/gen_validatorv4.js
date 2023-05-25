function validateForm() {
  var errorMessages = "";
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

  if (password === "null" || password === "" || password.length >= 7) {
      errorMessages += "<p>The password must be less than 7 characters and it is required.</p>";
      validPassword = false;
  } else {
      validPassword = true;
  }

  if (address === "null" || address === "") {
      errorMessages += "<p>Address is required.</p>";
      validAddress = false;
  } else {
      validAddress = true;
  }

  if (city === "null" || city === "") {
      errorMessages += "<p>City is required.</p>";
      validCity = false;
  } else {
      validCity = true;
  }

  if (state === "null" || state === "") {
      errorMessages += "<p>State is required.</p>";
      validState = false;
  } else {
      validState = true;
  }

  if (country === "null" || country === "" || country === "000") {
      errorMessages += "<p>Country is required.</p>";
      validCountry = false;
  } else {
      validCountry = true;
  }

  if (country === "USA") {
      if (zipcode === "null" || zipcode === "" || zipcode.length > 5) {
          errorMessages += "<p>Zipcode must be filled in with a maximum of 5 digits.</p>";
          validZipcode = false;
      } else {
          validZipcode = true;
      }
  }

  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validPassword && validAddress && validCity && validState && validCountry && validZipcode);
}
