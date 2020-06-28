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
   if (validateForm() == false) {
    return false;
  }

  printText.insertAdjacentHTML('beforeend', "Message was sent");


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

  ourRequest.send(formData);

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
function validateForm() {
  var name = document.forms["contact"]["full_name"].value;
  var email = document.forms["contact"]["email"].value;
  var message = document.forms["contact"]["message"].value;

  if (name == "" || email == "" || message == "") {
    alert("Details are missing in the contact form.");
    return false;
  }
  return true;
}
