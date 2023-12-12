
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "bulma/css/bulma.min.css"
import App from './components/App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//import * as serviceWorker from './service-worker'; // Import the service worker

import {UserProvider} from "./context/UserContext";

// ReactDOM.render(
//     <UserProvider>
// <App />
// </UserProvider>,
//  document.getElementById('root'));

function Main() {


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
//console.log(navigator)


const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(window.location.hostname)
);
const [subscription, setSubscription] = useState(null);

const handleSubscribe = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', { scope: '/' });
      console.log('Service Worker registered with scope:', registration);

      // const webpush = require('web-push');

      // const vapidKeys = webpush.generateVAPIDKeys();
      // console.log('Public Key:', vapidKeys.publicKey);
      // console.log('Private Key:', vapidKeys.privateKey);
      function base64URLEncode(base64) {
        return base64
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
      }
      const publicKey = 'BCMH2EC5EcwFGfvOicNrjEU4VHXWqbgrnsYlHJlZzt7vucx5HWEjtkXFRctwatSQH0M5X7QYqVpDMhd_2DlGE1s'; // Replace with your actual public key
      const applicationServerKey = base64URLEncode(publicKey);
      // Subscribe to push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      });

      // Send the subscription info to your server
      await sendSubscriptionToServer(subscription);

      // Save the subscription locally for later use
      setSubscription(subscription);
    } catch (error) {
      console.error('Error registering or subscribing to service worker:', error);
    }
  }
}

const sendSubscriptionToServer = async (subscription) => {
  console.log("sending subscription")
    try {
      // Send a POST request to your server with the subscription info
      await fetch('http://localhost:8000/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Subscription info sent to server:', subscription);
    } catch (error) {
      console.error('Error sending subscription info to server:', error);
    }
  };

  // useEffect(() => {
  //   handleSubscribe(); // Call handleSubscribe when the component mounts
  // }, []);


  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB2ebcMv-NrCQRVb6EHnuf1vTzBPFznJXs",
//   authDomain: "traxain.firebaseapp.com",
//   projectId: "traxain",
//   storageBucket: "traxain.appspot.com",
//   messagingSenderId: "572239738792",
//   appId: "1:572239738792:web:743c7c548d354302058f9d",
//   measurementId: "G-BZ20YC5XRW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




  return (
    <UserProvider>
      <App />
    </UserProvider>
  );

}

ReactDOM.render(<Main />, document.getElementById('root'));
// if ('serviceWorker' in navigator) {
//     console.log("voy a registrar")
//     navigator.serviceWorker.register('./service-worker.js')
//       .then(function (registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(function (error) {
//         console.error('Service Worker registration failed:', error);
//       });
//   }




