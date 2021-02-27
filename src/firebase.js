// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA8OBlqvymBSDpM1F_4grYk1Qmlp1UYlZ0",
    authDomain: "whatsapp-clone-531b9.firebaseapp.com",
    projectId: "whatsapp-clone-531b9",
    storageBucket: "whatsapp-clone-531b9.appspot.com",
    messagingSenderId: "503100667865",
    appId: "1:503100667865:web:54a8578d509124bbfe0bc8",
    measurementId: "G-T0Z6F2J8MS"
  };

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;