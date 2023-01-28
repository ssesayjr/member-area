/**
 * @file config.js
 * @author Sanjay Sunil
 * @license MIT
 */



var firebaseConfig = {
  apiKey: "AIzaSyDSx2SZM_p34N1wiS7Cf4JlsjMxedFE2No",
  authDomain: "member-area-t4e.firebaseapp.com",
  databaseURL: "https://member-area-t4e-default-rtdb.firebaseio.com",
  projectId: "member-area-t4e",
  storageBucket: "member-area-t4e.appspot.com",
  messagingSenderId: "969567033672",
  appId: "1:969567033672:web:81bf5f228f27f7c69e3b7d",
  measurementId: "G-FP33DCC1ZL"
};

function getFirebaseConfig(firebaseConfig) {
  if (!firebaseConfig|| !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebase.initializeApp(firebaseConfig);;
  }
}
