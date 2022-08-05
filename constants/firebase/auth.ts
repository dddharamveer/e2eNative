import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseApp from "./firebase";

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

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

    return response.user;
  } catch (err) {
    console.log(err);
  }
}

export async function LoginWithEmail(email: string, password: string) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (err) {
    throw new Error(err);
  }
}
