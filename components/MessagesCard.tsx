import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { FC } from "react";

type MessagesCard = {
  openChat?: () => void;
  latestMessage?: string;
  name?: string;
};

const MessagesCard: React.FC<MessagesCard> = ({
  openChat,
  latestMessage,
  name,
}) => {
  return (
    <Pressable
      onPress={openChat}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image
        style={styles.profileImg}
        source={{
          uri: "https://p.kindpng.com/picc/s/99-997900_headshot-silhouette-person-placeholder-hd-png-download.png",
        }}
      />

      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "column",
          marginLeft: 20,
          marginRight: 10,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 16 }}>{name}</Text>
        <Text
          style={{
            color: "grey",
          }}
        >
          {latestMessage ? latestMessage : "No messages yet"}
        </Text>
      </View>
      <Text style={{ alignSelf: "center", color: "grey" }}>09:38 AM</Text>
    </Pressable>
  );
};

export default MessagesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  pressed: {
    opacity: 0.7,
  },
});
