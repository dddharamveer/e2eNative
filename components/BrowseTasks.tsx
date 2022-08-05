import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Tasks from "./Tasks";

const BrowseTasks = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Tasks
        title="Pantry organizing"
        date="Wed, 3 August"
        image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
        open
        location="North kellyville NSW,"
        price={400}
        time="Anytime"
      />
      <Tasks
        title="Fix door handle"
        date="Wed, 3 August"
        image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
        open
        location="Sunshine West VIC, Aus"
        price={750}
        time="Anytime"
      />
      <Tasks
        title="Fix door handle"
        date="Wed, 3 August"
        image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
        open
        location="Sunshine West VIC, Aus"
        price={750}
        time="Anytime"
      />
      <Tasks
        title="Fix door handle"
        date="Wed, 3 August"
        image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
        open
        location="Sunshine West VIC, Aus"
        price={750}
        time="Anytime"
      />
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
