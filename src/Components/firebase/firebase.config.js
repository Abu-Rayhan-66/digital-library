// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCkEXkRJSlFXJx490ScSMKees6ejL9uI",
  authDomain: "library-management-cdc86.firebaseapp.com",
  projectId: "library-management-cdc86",
  storageBucket: "library-management-cdc86.appspot.com",
  messagingSenderId: "515436266651",
  appId: "1:515436266651:web:4cd8fba4a28d0ccfc6b23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;