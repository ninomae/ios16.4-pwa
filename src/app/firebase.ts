// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import localforage from "localforage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export async function requestPushNotification() {
  try {
    const messaging = getMessaging(app);
    const tokenInLocalForage = await localforage.getItem("fcm_token");
    if (tokenInLocalForage !== null) {
      return tokenInLocalForage;
    }

    const status = await Notification.requestPermission();
    if (status && status === "granted") {
      // Get new token from Firebase
        const fcm_token = await messaging.getToken({
          vapidKey: "your_web_push_certificate_key_pair",
        });

        // Set token in our local storage
        if (fcm_token) {
          localforage.setItem("fcm_token", fcm_token);
          return fcm_token;
        }
    }
  }
  catch{

  }
}