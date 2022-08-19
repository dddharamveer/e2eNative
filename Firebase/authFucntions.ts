import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export async function createAccountWithPassword(
  email: string,
  password: string,
) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return setDoc(doc(db, "users", response.user.uid), {
      email: response.user.email,
      AccountCreatedOn: serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function LoginWithEmail(email: string, password: string) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (err: any) {
    throw new Error(err);
  }
}

export const mergeData = async (uid: string, data: any) => {
  return await setDoc(doc(db, "users", uid), data, { merge: true });
};
