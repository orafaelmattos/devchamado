import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA88HnSUt9RBe76x2NPp8U5O-xkQupBXjM",
    authDomain: "devchamado-26821.firebaseapp.com",
    projectId: "devchamado-26821",
    storageBucket: "devchamado-26821.appspot.com",
    messagingSenderId: "422141676194",
    appId: "1:422141676194:web:bcd4cde217b19b88de65fb",
    measurementId: "G-DSHVSRNW5Z"
  };

const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export { auth, db, storage };