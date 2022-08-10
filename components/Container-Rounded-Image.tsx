import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageContainer = ({ top, children }) => {
  return (
    <View style={[{ backgroundColor: "white", flex: 1 }, { ...styles }]}>
      {top && top}
      <View style={{ height: "22%" }}>
        <Image
          source={require("../assets/blob-scene-haikei.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View
        style={{
          marginTop: "-10%",
          padding: 35,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white",
        }}>
        {children}
      </View>
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({});
