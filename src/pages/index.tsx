import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import copy from "copy-to-clipboard";
import { isPWA } from "@/utils/isPWA";
import { useAddToHomeScreenPrompt } from "@/utils/useAddToHomeScreen";
export default function Home() {
  const [token, setToken] = useState("");
  const [_, promptToInstall] = useAddToHomeScreenPrompt();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBTEDDECvB02dTj00GWLeDxUOE5k5aIGck",
      authDomain: "ios16-4pwa.firebaseapp.com",
      projectId: "ios16-4pwa",
      storageBucket: "ios16-4pwa.appspot.com",
      messagingSenderId: "86711843397",
      appId: "1:86711843397:web:781af03bb9d021af85012c",
      measurementId: "G-780C37E5PD",
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
        const fcm_token = await getToken(messaging, {
          vapidKey:
            "BDeIXKN4fpZfwbkOBv822UzXDhE6LOFAOdiw9TibjFmao6xQwQmhi3IXBCouTnpj-i8dojVE4Wbv_wVFymFmJCw",
        });

        // Set token in our local storage
        if (fcm_token) {
          localStorage.setItem("fcm_token", fcm_token);
          return fcm_token;
        }
      }
    }
    getFcmToken().then((t) => {
      if (t !== undefined) {
        setToken(t);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <button
            onClick={() => {
              copy(token);
            }}
          >
            {token}
          </button>
        </div>
        <button
          onClick={() => {
            const firebaseConfig = {
              apiKey: "AIzaSyBTEDDECvB02dTj00GWLeDxUOE5k5aIGck",
              authDomain: "ios16-4pwa.firebaseapp.com",
              projectId: "ios16-4pwa",
              storageBucket: "ios16-4pwa.appspot.com",
              messagingSenderId: "86711843397",
              appId: "1:86711843397:web:781af03bb9d021af85012c",
              measurementId: "G-780C37E5PD",
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
                const fcm_token = await getToken(messaging, {
                  vapidKey:
                    "BDeIXKN4fpZfwbkOBv822UzXDhE6LOFAOdiw9TibjFmao6xQwQmhi3IXBCouTnpj-i8dojVE4Wbv_wVFymFmJCw",
                });

                // Set token in our local storage
                if (fcm_token) {
                  localStorage.setItem("fcm_token", fcm_token);
                  return fcm_token;
                }
              }
            }
            getFcmToken();
          }}
        >
          notification
        </button>
        <div>{isPWA() ? "PWA環境" : "NOT PWA 環境"}</div>
        Hello! Wanna add to homescreen?
        <button onClick={promptToInstall}>Add to homescreen</button>
      </main>
    </>
  );
}
