importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBTEDDECvB02dTj00GWLeDxUOE5k5aIGck",
    authDomain: "ios16-4pwa.firebaseapp.com",
    projectId: "ios16-4pwa",
    storageBucket: "ios16-4pwa.appspot.com",
    messagingSenderId: "86711843397",
    appId: "1:86711843397:web:781af03bb9d021af85012c",
    measurementId: "G-780C37E5PD"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {

    console.log("backgroundMessage")
  
    let messageTitle = "MESSAGETITLE"
    let messageBody = "MESSAGEBODY"
  
    return self.registration.showNotification(
      messageTitle,
      {
        body: messageBody,
        tag: messageTag
      });
});