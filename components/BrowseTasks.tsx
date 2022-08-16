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
import Task2 from "./Task2";
import { useNavigation } from "@react-navigation/native";
const BrowseTasks = () => {
  const [task, settask] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

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
          <Task2
            onPress={() => {
              navigation.navigate("TaskDetails", {
                item: item,
              });
            }}
            key={item.id}
            title={item.title}
            price={item.Budget}
            status={item.status}
            date={new Date(item.date.seconds * 1000)}
            location={item.location}
            profile={item.profilePic}
          />
          // <Tasks
          //   key={item.name}
          //   title={item.name}
          //   time="Anytime"
          //   price={parseInt(item.budget)}
          //   date={item.date}
          //   open
          //   location="Sunshine West VIC, Aus"
          //   image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
          // />
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
