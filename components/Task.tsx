import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { getFullDate } from "../constants/Formating";

const Task = ({
  title,
  price,
  status,
  location,
  profile,
  date,
  onPress,
}: {
  title?: string;
  price?: number;
  status?: string;
  location?: string;
  profile?: string;
  date?: any;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "lightgrey" }}
      style={{
        // flex: 1,
        padding: 15,
        margin: 10,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 5,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              flex: 1,

              fontSize: 18,
            }}
          >
            {title}
          </Text>

          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source={{
              uri: profile,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.icons}>
            <View
              style={{
                marginRight: 3,
              }}
            >
              <EvilIcons name="location" size={15} />
            </View>
            <Text style={styles.subs}>{location}</Text>
          </View>
          <View style={styles.icons}>
            <View style={{ marginRight: 3 }}>
              <FontAwesome5 name="calendar" color="#D9D9D9" />
            </View>
            {/* getFullDate(date) */}
            <Text style={styles.subs}>{date ? "19/11/2001" : "  "}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#4A73E8",
              paddingVertical: 7,
              paddingHorizontal: 12,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",

                fontSize: 11,
              }}
            >
              {status?.toUpperCase()}
            </Text>
          </View>
          <Text
            style={{
              textAlignVertical: "bottom",

              color: "green",
              fontSize: 17,
            }}
          >
            ${price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Task;

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  subs: {
    color: "#898080",

    fontSize: 14,
    marginLeft: 3,
  },
});
