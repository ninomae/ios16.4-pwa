'use client'
// Import the functions you need from the SDKs you need


export async function requestPermission() {
  const firebaseConfig = {
    apiKey: "AIzaSyBTEDDECvB02dTj00GWLeDxUOE5k5aIGck",
    authDomain: "ios16-4pwa.firebaseapp.com",
    projectId: "ios16-4pwa",
    storageBucket: "ios16-4pwa.appspot.com",
    messagingSenderId: "86711843397",
    appId: "1:86711843397:web:781af03bb9d021af85012c",
    measurementId: "G-780C37E5PD"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    async function getFcmToken() {
      const tokenInLocalForage = localStorage.getItem("fcm_token");
      if (tokenInLocalForage !== null) {
        return tokenInLocalForage;
      }
  
      const status = await Notification.requestPermission();
      if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await getToken(messaging, { vapidKey: "BDeIXKN4fpZfwbkOBv822UzXDhE6LOFAOdiw9TibjFmao6xQwQmhi3IXBCouTnpj-i8dojVE4Wbv_wVFymFmJCw" });
  
          // Set token in our local storage
          if (fcm_token) {
            localStorage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
      }
    }
    getFcmToken();
}