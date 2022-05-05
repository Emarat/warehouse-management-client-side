// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDChv2rMXP8kiuCf-qU4U5FI0rHoIRaDZM",
    authDomain: "fruitswarehouse-44b5a.firebaseapp.com",
    projectId: "fruitswarehouse-44b5a",
    storageBucket: "fruitswarehouse-44b5a.appspot.com",
    messagingSenderId: "134193006528",
    appId: "1:134193006528:web:a337c19c42366579a8aa25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;