'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestPermission() {
  console.log("hoge");
  try {
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
  catch{

  }
}