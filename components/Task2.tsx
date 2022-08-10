import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../constants/fonts";

const Task2 = ({ title, price, status }) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        flex: 1,
        height: 130,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "row",
      }}>
      <View style={{ height: "100%", width: "42%", padding: 15 }}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 5 }}
          source={{
            uri: "https://images.unsplash.com/photo-1659605199215-83f8b3a8b5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 15,
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}>
        <Text style={{ fontFamily: fonts.bold, fontSize: 18 }}>{title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#4A73E8",
              paddingVertical: 7,
              paddingHorizontal: 12,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: "white",
                fontFamily: fonts.extrabold,
                fontSize: 11,
              }}>
              {status.toUpperCase()}
            </Text>
          </View>
          <Text
            style={{
              textAlignVertical: "bottom",
              fontFamily: fonts.extrabold,
              color: "green",
              fontSize: 17,
            }}>
            ${price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({});
