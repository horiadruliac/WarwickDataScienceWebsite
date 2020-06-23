// var nameOfUser = document.getElementById("full_name");
// var addressOfUser = document.getElementById("email");
// var subjectSent = document.getElementById("subject");
// var messageSent = document.getElementById("message");
// //https://cors-anywhere.herokuapp.com/
// var URL = 'https://script.google.com/macros/s/AKfycbzFdrQG6gIzCdRvwyAljscJpKKt653WZR-CwZCsGvHuKwaN2wCo/exec';

// var printText = document.getElementById("sentMessageText");

// const postBtn = document.getElementById("sendEmailButton");

// const sendHttpRequest = (method, url, data) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.responseType = 'json';

//     if (data) {
//       xhr.setRequestHeader('Content-Type', 'application/json');
//     }

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };

//     console.log("Sending just now..." + JSON.stringify(data));
//     xhr.send(JSON.stringify(data));
//     console.log("Sent");
//   });
//   return promise;
// };

// const sendData = () => {
//   event.preventDefault();
//   sendHttpRequest('POST', URL, {
//     sender_name : nameOfUser.value,
//     sender_address : addressOfUser.value,
//     subject : subjectSent.value,
//     message : messageSent.value  
//   })
//     .then(responseData => {
//       console.log("Response: " + responseData);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// postBtn.addEventListener('click', sendData);

// /*
//   Checks email address string against regular expression and returns a bool.
//   Source: https://stackoverflow.com/a/46181
// */
// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }