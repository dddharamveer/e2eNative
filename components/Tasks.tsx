import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

type Task = {
  title: string;
  location: string;
  date: string;
  time: string;
  price: number;
  image: string;
  open: boolean;
};

const Tasks: React.FC<Task> = ({
  title,
  location,
  date,
  time,
  price,
  image,
  open,
  navigation,
}) => {
  function handlePress() {
    navigation && navigation.navigate("TaskContent");
  }
  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "#cccccc" }}
      onPress={handlePress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {/* location */}
        <View style={styles.icons}>
          <View style={{ marginRight: 3 }}>
            <FontAwesome5 name="location-arrow" color={Colors.secondary} />
          </View>
          <Text style={styles.subs}>{location}</Text>
        </View>
        <View style={styles.icons}>
          <View style={{ marginRight: 3 }}>
            <FontAwesome5 name="calendar" color="#D9D9D9" />
          </View>
          <Text style={styles.subs}>{date}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <View style={{ marginRight: 3 }}>
          <FontAwesome5 name="clock" color="#D9D9D9" />
        </View>
        <Text style={styles.subs}>{time}</Text>
      </View>
      {open ? <Text style={[styles.subs, { color: "green" }]}>OPEN</Text> : ""}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#7E7C7C66",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    width: 200,
  },
  subs: {
    color: "#898080",
    marginVertical: 3,
    fontSize: 14,
    marginLeft: 3,
  },
  price: {
    fontSize: 24,
  },
  image: {
    borderRadius: 50,
    height: 35,
    width: 35,
    marginBottom: 22,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Tasks;
