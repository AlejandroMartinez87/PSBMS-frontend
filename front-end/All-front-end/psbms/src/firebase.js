import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyCde-uUp7y9YIeddbAL51SCYj_s9Ro9jEc",
        authDomain: "psbms-finance.firebaseapp.com",
        databaseURL: "https://psbms-finance.firebaseio.com",
        projectId: "psbms-finance",
        storageBucket: "psbms-finance.appspot.com",
        messagingSenderId: "153270820514",
        appId: "1:153270820514:web:88548c0e81bdd7d4f741fb",
        measurementId: "G-4869M327G2"

});
// const db = firebase.firestore();
const auth = firebase.auth(); 

export {auth}; 
