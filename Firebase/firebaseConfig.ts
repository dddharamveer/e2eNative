import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgf6ZWLhQJWJXAwLsVDN5s5pXkEeBOPx0",
  authDomain: "e2edatabase.firebaseapp.com",
  projectId: "e2edatabase",
  storageBucket: "e2edatabase.appspot.com",
  messagingSenderId: "151935304798",
  appId: "1:151935304798:web:854527103a91d9dcdd60cf",
};
let firebaseApp: any;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
firebaseApp = getApp();

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, auth, storage };
