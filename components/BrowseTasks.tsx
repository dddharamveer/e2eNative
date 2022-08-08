import React, { useEffect, useState } from "react";
import {
  Image,
  MaskedViewComponent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Tasks from "./Tasks";
import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "../constants/firebase/firebase";
import { tasks } from "../constants/firebase/dataQueries";

const BrowseTasks = () => {
  const [task, settask] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getTasks = async () => {
    setRefresh(true);
    let array = await tasks();

    settask(array);
    setRefresh(false);
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={getTasks} />
      }
      showsVerticalScrollIndicator={false}>
      {task.map((item) => {
        return (
          <Tasks
            key={item.name}
            title={item.name}
            time="Anytime"
            price={parseInt(item.budget)}
            date={item.date}
            open
            location="Sunshine West VIC, Aus"
            image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
          />
        );
      })}
      <View
        style={{
          height: 300,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>The End</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default BrowseTasks;
