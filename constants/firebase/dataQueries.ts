import {
  getFirestore,
  getDocs,
  collectionGroup,
  query,
  where,
  getDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import { auth } from "./auth";
import firebaseApp from "./firebase";
const db = getFirestore(firebaseApp);

export const tasks = async () => {
  const tsToMillis = Timestamp.now().toMillis();

  const compareDate = new Date(tsToMillis - 24 * 60 * 60 * 1000);

  const taskQuery = query(
    collectionGroup(db, "tasks"),

    where("createdAt", ">", compareDate),
  );

  const querySnapshot = await getDocs(taskQuery);

  let array = [];

  querySnapshot.forEach((doc) => {
    array.push({ ...doc.data(), id: doc.id });
  });

  return array;
};

export const getUser = async () => {
  try {
    const docRef = doc(db, `users/${auth.currentUser?.uid}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.log(error);
  }
};
