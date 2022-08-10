import {
  getFirestore,
  getDocs,
  collectionGroup,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "./firebase";

const db = getFirestore(firebaseApp);

export const tasks = async () => {
  const taskQuery = query(
    collectionGroup(db, "tasks"),
    where("status", "==", "open"),
  );

  const querySnapshot = await getDocs(taskQuery);

  let array = [];

  querySnapshot.forEach((doc) => {
    array.push(doc.data());
  });

  return array;
};
