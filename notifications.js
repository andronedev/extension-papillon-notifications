const moduleToInject = `
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBVXhcXHVbPhVBcM3NfcnYK4nOc6m-nZuE",
authDomain: "notifications-pronoteplus.firebaseapp.com",
projectId: "notifications-pronoteplus",
storageBucket: "notifications-pronoteplus.appspot.com",
messagingSenderId: "776699496952",
appId: "1:776699496952:web:43705756a295a350406e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);



// fake worker point to ./extensions/hello-world/helloworld.js

var serviceWorker 


getToken(messaging, {vapidKey: "BLdJoO_YTTGUtuh8tYJ-5TlTiTgiQnoCjmtpiJyDIu7bILVQluypJpc2gkaZ-ThyMruvXkOK9D_ML_5NViFl_qU"})
.then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });



`


function injectScript() {
    

    const blob = new Blob([moduleToInject], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    // create script
    const script = document.createElement('script');
    script.src = url;
    script.type = 'module';
    document.head.appendChild(script);
}


function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      injectScript();
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
}




requestPermission();