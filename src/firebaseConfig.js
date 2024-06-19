import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA29lEJ0hcJAQvqfALMjwII2GI0r5sludM",
  authDomain: "simple-login-app-0000.firebaseapp.com",
  projectId: "simple-login-app-0000",
  storageBucket: "simple-login-app-0000.appspot.com",
  messagingSenderId: "176326668770",
  appId: "1:176326668770:web:234da11db6caf94fa2c9bb",
  measurementId: "G-7BXBVPCN27",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
