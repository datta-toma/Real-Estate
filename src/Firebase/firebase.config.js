
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAh1ttlD3tY1FZ9Osvz_WyIbIRManHv4aA",
  authDomain: "hospitality-project-316f6.firebaseapp.com",
  projectId: "hospitality-project-316f6",
  storageBucket: "hospitality-project-316f6.appspot.com",
  messagingSenderId: "182395950903",
  appId: "1:182395950903:web:9e73a397798960853c6cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;