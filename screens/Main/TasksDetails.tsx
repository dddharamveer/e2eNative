import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";

import Button1 from "../../components/UI/Button-1";
import { MainStackScreenProps } from "../../types";
// import { getFullDate } from "../../constants/Formating";
const TasksDetails = ({
  navigation,
  route,
}: MainStackScreenProps<"TaskDetails">) => {
  const { item }: any = route.params;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{item.title}</Text>
        <View style={{ marginVertical: 19 }}>
          <Text style={styles.subText}>Posted by</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginVertical: 5,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.profilePic }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 6,
                }}
              />
              <Text>Bharat Adya</Text>
            </View>
            <Text>10 mins</Text>
          </View>
        </View>
        <View style={{ height: 280, width: "100%", borderRadius: 10 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            source={{
              uri: "https://images.unsplash.com/photo-1657299156725-dc862fea3e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1 / 2 }}>
            <Text style={styles.subText}>Location</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                flex: 1,
                marginVertical: 11,
              }}
            >
              <EvilIcons name="location" size={18} />
              <Text style={{ fontSize: 13, flex: 1 }}>{item.location}</Text>
            </View>
          </View>
          <View style={{ flex: 1 / 2, flexDirection: "column" }}>
            <Text style={styles.subText}>Due Date</Text>
            <View style={{ marginVertical: 11 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <EvilIcons name="calendar" size={18} />
                <Text style={{ fontSize: 13 }}>
                  {/* {getFullDate(new Date(item.date.seconds * 1000))} */}
                  19/11/2001
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <EvilIcons name="clock" size={18} />
                <Text style={{ fontSize: 13 }}>Anytime</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={[styles.subText, { marginBottom: 10 }]}>Details</Text>
          {/* <Text>{item.description}</Text> */}
        </View>
        <View
          style={{
            marginVertical: 20,
            backgroundColor: "green",
            borderRadius: 15,
            padding: 35,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "white",

                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Budget
            </Text>

            <Button1 backgroundColor="white" color>
              RS {item.Budget}
            </Button1>
          </View>
          <View style={{ marginTop: 30 }}>
            <Button1 backgroundColor="white" color>
              Make an Offer
            </Button1>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.subText}>Ask Questions</Text>
          <TextInput
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            maxLength={250}
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 15,
              marginVertical: 12,
            }}
          />
          <Button1 backgroundColor={"green"}>Send</Button1>
        </View>
      </ScrollView>
    </View>
  );
};

export default TasksDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 23,
  },
  subText: {
    fontSize: 15,
  },
});
