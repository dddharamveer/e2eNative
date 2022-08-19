import {
  getDocs,
  collectionGroup,
  query,
  where,
  getDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export const tasks = async () => {
  const tsToMillis = Timestamp.now().toMillis();

  const compareDate = new Date(tsToMillis - 24 * 60 * 60 * 1000);

  const taskQuery = query(
    collectionGroup(db, "tasks"),

    where("createdAt", ">", compareDate),
  );

  const querySnapshot = await getDocs(taskQuery);

  let array: any = [];

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
