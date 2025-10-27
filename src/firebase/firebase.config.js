// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASQ8kTgiVE9VUeCXZat9GCN4hd_zhT8IE",
  authDomain: "warmpaws-a09.firebaseapp.com",
  projectId: "warmpaws-a09",
  storageBucket: "warmpaws-a09.firebasestorage.app",
  messagingSenderId: "663166771919",
  appId: "1:663166771919:web:33dac05c58b17d6b9f4dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;