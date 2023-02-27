import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_CLOUD_MESSAGING_KEY_PAIR }).then((currentToken) => {
  if (currentToken) {
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});