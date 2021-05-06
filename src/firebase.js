import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRRXC5s_eamboXGoCT7-ggREHJ67r-SBY",
    authDomain: "twitter-clone-b6eb7.firebaseapp.com",
    projectId: "twitter-clone-b6eb7",
    storageBucket: "twitter-clone-b6eb7.appspot.com",
    messagingSenderId: "528594621342",
    appId: "1:528594621342:web:933c96b561a2a3f3b8bc8f",
    measurementId: "G-BXEM0TZN0M"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

