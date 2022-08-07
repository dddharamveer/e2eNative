import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import TextInputUi from "../../components/ui/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  doc,
  onSnapshot,
  getFirestore,
  getDoc,
  DocumentSnapshot,
  collection,
  setDoc,
  addDoc,
  query,
  getDocs,
  collectionGroup,
  where,
  serverTimestamp,
} from "firebase/firestore";
import firebaseApp from "../../constants/firebase/firebase";
import { isEmpty } from "@firebase/util";
import { AuthContext } from "../../store/authContext";

const CreateTask = () => {
  const db = getFirestore(firebaseApp);
  const [Name, setName] = useState();
  const [Budget, setBudget] = useState();
  const [open, setOpen] = useState();
  const [Location, setLocation] = useState();
  const [date, setdate] = useState();
  const ctx = useContext(AuthContext);

  const buttonClick = async () => {
    const userref = collection(db, "users");
    const a = await addDoc(collection(userref, ctx.user?.uid, "tasks"), {
      name: Name,
      budget: Budget,
      date: date,
      status: open,
    });
  };
  return (
    <SafeAreaView style={{ padding: 30 }}>
      <TextInputUi
        onChangeText={(name) => {
          setName(name);
        }}
        name="Name"
      />
      <TextInputUi
        onChangeText={(Budget) => {
          setBudget(Budget);
        }}
        name="Budget"
      />
      <TextInputUi
        onChangeText={(date) => {
          setdate(date);
        }}
        name="MM / DD / YYYY"
      />
      <TextInputUi
        onChangeText={(open) => {
          setOpen(open);
        }}
        name="open/closed"
      />
      <Button title="save" onPress={buttonClick} />
    </SafeAreaView>
  );
};

export default CreateTask;
