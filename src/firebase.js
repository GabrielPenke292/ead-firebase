import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbVoKlNVbnaITV0KU8dr28HsXbpp7PQU8",
    authDomain: "ead-curso-app.firebaseapp.com",
    projectId: "ead-curso-app",
    storageBucket: "ead-curso-app.appspot.com",
    messagingSenderId: "320565479909",
    appId: "1:320565479909:web:1bfd5feaa89a44c78fc70c"
});

const db = firebase.firestore();
const storage  = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db,storage};