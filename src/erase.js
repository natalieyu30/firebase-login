import firebase from "firebase/app"
import "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDk7_9acXZtztOOlFiq59onu5z8qKRJgbs",
  authDomain: "auth-login-f5669.firebaseapp.com",
  projectId: "auth-login-f5669",
  storageBucket: "auth-login-f5669.appspot.com",
  messagingSenderId: "1069831016282",
  appId: "1:1069831016282:web:3bce9dcf207aee3ffbed63"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

  
