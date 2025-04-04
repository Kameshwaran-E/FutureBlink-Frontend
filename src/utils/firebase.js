import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6uUZUPL7gn2xvQOIGYuv7Zzt7smW8j9w",
  authDomain: "futureblink-aa645.firebaseapp.com",
  projectId: "futureblink-aa645",
  storageBucket: "futureblink-aa645.firebasestorage.app",
  messagingSenderId: "708277577369",
  appId: "1:708277577369:web:060f43d548a9e9af673a08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
