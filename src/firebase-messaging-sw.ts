import { app } from "./app/firebase"
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

interface MyWindow extends Window  {
    registration: any
  }
declare var self: MyWindow

const messaging = getMessaging(app);
onBackgroundMessage(messaging, (payload) =>{
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle,
      notificationOptions);
});