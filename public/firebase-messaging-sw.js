importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

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

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});