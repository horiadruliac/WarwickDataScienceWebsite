var nameOfUser = document.getElementById("full_name");
var addressOfUser = document.getElementById("email");
var subjectSent = document.getElementById("subject");
var messageSent = document.getElementById("message");

// var url = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzFdrQG6gIzCdRvwyAljscJpKKt653WZR-CwZCsGvHuKwaN2wCo/exec';
var url = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwOH4p9Tai8ZNBf1ej-lj6DD-YbB5xlg2G7Pzuk7G0WD22hlvpn/exec';

var sendEmailButton = document.getElementById("sendEmailButton");
var printText = document.getElementById("sentMessageText");

sendEmailButton.addEventListener("click", function() {

  event.preventDefault();

   // Return false if the form is not valid, otherwise the HTTP request is made
   if (validateForm() == true) {
    return;
  }

  // Add a message saying the message is sent, then make it disappear after 5 seconds
  document.getElementById("successMessage").innerHTML="Message was sent"
  setTimeout(function() {
    document.getElementById("successMessage").innerHTML="";
  }, 5000);


  var emailBody = {
    'sender_name' : nameOfUser.value,
    'sender_address' : addressOfUser.value,
    'subject' : subjectSent.value,
    'message' : messageSent.value
  }

  console.log("Creating Request and sending " + JSON.stringify(emailBody));
  var formData = new FormData();
  formData.append("sender_name", nameOfUser.value);
  formData.append("address_name",  addressOfUser.value);
  formData.append("subject", subjectSent.value);
  formData.append("message", messageSent.value);

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('POST', url);

  //ourRequest.send(formData);

//   ourRequest.onload = function() {
//     if(ourRequest.status >= 200 && ourRequest.status < 400) {
//        console.log("Connected to the Server.");
//       //  var ourData = JSON.parse(ourRequest.responseText);
//        console.log("Response is here: " + ourRequest.responseText);
//    } else {
//      console.log("We connected to the server, but it returned an error.");
//    }
//  };
//   ourRequest.onerror = function() {
//     console.log("Connection error");
//   };

});
/*
Checks email address string against regular expression and returns a bool.
Source: https://stackoverflow.com/a/46181
*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check if the attributes are empty or not
// Validation will check if the values are legal, and if not
// the materialise error messages are used to display below the corresponding
// attributes that are illegal, otherwise the message will send.
function validateForm() {
  var errors = false; //boolean value to indicate if there are errors or not
  var name = document.forms["contact"]["full_name"].value;
  var nameError = document.getElementById("nameError").outerHTML;
  var subject = document.forms["contact"]["subject"].value;
  var subjectError = document.getElementById("subjectError").outerHTML;
  var email = document.forms["contact"]["email"].value;
  var emailError = document.getElementById("emailError").outerHTML;
  var message = document.forms["contact"]["message"].value;
  var messageError = document.getElementById("messageError").outerHTML;

  // Check if inputs are empty
  if (name.length == 0 || name == "") {
    errors = true;
    document.getElementById("nameError").outerHTML = nameError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Details Missing"');
    document.getElementById("full_name").className = "invalid";
  } else {
    document.getElementById("full_name").className = "valid";
  }

  if (email == "") {
    errors = true;
    document.getElementById("emailError").outerHTML = emailError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Details Missing"');
    document.getElementById("email").className = "invalid";
  } else {
    document.getElementById("email").className = "valid";
  }

  if (message == "") {
    errors = true;
    document.getElementById("messageError").outerHTML = messageError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Details Missing"');
    document.getElementById("message").className = "materialize-textarea invalid";
  } else {
    document.getElementById("message").className = "materialize-textarea valid";
  }

  // Check the lengths of each input for validation
  if (name.length > 60) {
    errors = true;
    document.getElementById("full_name").className = "invalid";
    document.getElementById("nameError").outerHTML = nameError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Name is too long"');
  }

  if (subject.length > 80) {
    errors = true;
    document.getElementById("subject").className = "invalid";
    document.getElementById("subjectError").outerHTML = subjectError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Subject is too long"');
  }

  if (email.length > 80) {
    errors = true;
    document.getElementById("email").className = "invalid";
    document.getElementById("emailError").outerHTML = emailError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Email is too long"');
  }

  if (message.length > 500) {
    errors = true;
    document.getElementById("message").className = "invalid";
    document.getElementById("messageError").outerHTML = messageError.replace(/data-error="(\w|\s|\.)*"/g, 'data-error="Message is too long"');
  }
  
  return errors;
}
