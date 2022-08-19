import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";

import Task from "./Task";

import { useNavigation } from "@react-navigation/native";
import { tasks } from "../Firebase/dataQueries";

const BrowseTasks = () => {
  const [task, settask] = useState<any>([]);
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
      showsVerticalScrollIndicator={false}
    >
      {task.map((item: any) => {
        return (
          <Task
            onPress={() => {
              navigation.navigate("TaskDetails", {
                item,
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
