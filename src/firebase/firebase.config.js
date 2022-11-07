// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdJEtZuO1HpRoIVul5kTv9yIWK215ykk0",
    authDomain: "paradice-travel.firebaseapp.com",
    projectId: "paradice-travel",
    storageBucket: "paradice-travel.appspot.com",
    messagingSenderId: "126137607105",
    appId: "1:126137607105:web:097ef45d725e1ca6c70540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;