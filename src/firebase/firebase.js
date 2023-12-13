import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKg6guISLB3JyAs9iS__ADxyZwqY-pqtE",
  authDomain: "linkedin-clone-mbdev.firebaseapp.com",
  projectId: "linkedin-clone-mbdev",
  storageBucket: "linkedin-clone-mbdev.appspot.com",
  messagingSenderId: "11780863876",
  appId: "1:11780863876:web:b2cc33c2c6a6405e08cfd1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { auth, db };
