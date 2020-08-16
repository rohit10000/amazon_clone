import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCc_9oy2Ds6Cch32-Vc6_Z7jEJsG_PK6u0",
    authDomain: "clone-f4763.firebaseapp.com",
    databaseURL: "https://clone-f4763.firebaseio.com",
    projectId: "clone-f4763",
    storageBucket: "clone-f4763.appspot.com",
    messagingSenderId: "432125349584",
    appId: "1:432125349584:web:eaddc53a4f4f35565b18d5",
    measurementId: "G-V9BJ343DH3"
});

const auth = firebase.auth();

export {auth};
