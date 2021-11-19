import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcPs8YorB0Y0QnHij2EVMSvq2LowtEbzs",
    authDomain: "clone-9f4cf.firebaseapp.com",
    projectId: "clone-9f4cf",
    storageBucket: "clone-9f4cf.appspot.com",
    messagingSenderId: "331620380363",
    appId: "1:331620380363:web:47320ed5d9bd15caf8754e",
    measurementId: "G-XV0LZE02SP"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth=firebase.auth();

  export { db, auth}