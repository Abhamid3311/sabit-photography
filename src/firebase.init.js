// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALxtbgaJOciv0LH23jmn2_WB2cBgbyUCI",
    authDomain: "sabit-photography.firebaseapp.com",
    projectId: "sabit-photography",
    storageBucket: "sabit-photography.appspot.com",
    messagingSenderId: "21551758121",
    appId: "1:21551758121:web:e7e7af8b77bc26cfc1d538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;