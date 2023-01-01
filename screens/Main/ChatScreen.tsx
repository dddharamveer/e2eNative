import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect } from "react";

import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import IconButton from "../../components/UI/IconButton";
import {
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../Firebase/firebaseConfig";
import { AuthContext } from "../../store/authContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import LoadingScreen from "../../components/UI/LoadingScreen";

const Chat = ({ navigation, route }: any) => {
  const [text, onChangeText] = React.useState("");
  // const [number, onChangeNumber] = React.useState(null);
  //get the chat id from the route params
  const [messages, setMessages] = React.useState<any>([]);
  const { chat } = route.params;
  console.log(chat);
  const ctx = useContext(AuthContext);
  const addMessage = async () => {
    if (text === "") return;
    console.log(text);

    const update = await updateDoc(doc(db, "chats", chat.chat.id), {
      messages: arrayUnion({
        message: text,
        sender: ctx.userData.uid,
        timestamp: new Date().getTime(),
        type: "text",
      }),
    });
    console.log(update);

    onChangeText("");
  };

  const formatTime = (timestamp: any) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    return `${hours}:${minutes}`;
  };
  useEffect(() => {
    // const unsubscribe = db.collection("chats").doc(chat.id).onSnapshot((doc) => {
    //   setMessages(doc.data()?.messages);
    // });
    const unsubscribe = onSnapshot(doc(db, "chats", chat.chat.id), (doc) => {
      setMessages(doc.data()?.messages);
    });
    return unsubscribe;
  }, []);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>("");
  const pick = async () => {
    const uploadImage = async (uri: any) => {
      console.log(uri);

      const response = await fetch(uri);
      const blob = await response.blob();
      setLoading(true);
      uploadBytes(
        ref(storage, `chatImages/${ctx.userData.uid}/${Date.now()}`),
        blob
      )
        .then((snap) => {
          return getDownloadURL(snap.ref);
        })
        .then((downloadUrl: any) => {
          setImage(downloadUrl);
          ctx.changeUserData({ profilePic: downloadUrl });
          return updateDoc(doc(db, "chats", chat.chat.id), {
            messages: arrayUnion({
              message: downloadUrl,
              sender: ctx.userData.uid,
              timestamp: new Date().getTime(),
              type: "image",
            }),
          });
        })
        .then((res) => {
          setLoading(false);
          console.log(res);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      await uploadImage(result.uri);
    }
  };
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          color={"#EFF5F5"}
          size={20}
          iconColor="black"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.headerText}>{chat.user.Name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 5,
                backgroundColor: "#68B984",
                borderRadius: 10,
                marginRight: 4,
              }}
            />
            <Text
              style={{
                fontWeight: "500",
                color: "#68B984",
              }}
            >
              Online
            </Text>
          </View>
        </View>

        <IconButton
          name="ellipsis-v"
          color={"white"}
          size={20}
          iconColor="black"
          marginLeft={10}
        />
      </View>

      <ScrollView>
        {messages?.map((message: any) => (
          <View
            key={message.timestamp}
            style={{
              alignSelf:
                message.sender === ctx.userData.uid ? "flex-end" : "flex-start",
              margin: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                backgroundColor:
                  message.sender === ctx.userData.uid ? "#187afa" : "white",
                elevation: 5,
                paddingVertical: 20,
                paddingHorizontal: 20,
                borderTopRightRadius:
                  message.sender === ctx.userData.uid ? 0 : 20,
                borderTopLeftRadius:
                  message.sender === ctx.userData.uid ? 20 : 0,
                borderRadius: 20,
                maxWidth: "80%",
              }}
            >
              {message.type === "text" ? (
                <Text
                  style={{
                    color:
                      message.sender === ctx.userData.uid ? "white" : "black",
                  }}
                >
                  {message.message}
                </Text>
              ) : message.type === "image" ? (
                <Image
                  source={{ uri: message.message }}
                  style={{
                    width: 200,
                    height: 250,
                    borderRadius: 20,
                    resizeMode: "contain",
                  }}
                />
              ) : null}
            </View>
            <Text
              style={{
                color: "gray",
                alignSelf: "flex-end",
                marginRight: 12,
                marginTop: 5,
                fontSize: 12,
              }}
            >
              {formatTime(message.timestamp)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#EEEEEE",
          marginHorizontal: 5,
        }}
      >
        <IconButton
          name="link"
          iconColor="white"
          color={"#1977f2"}
          size={24}
          onPress={pick}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={text}
            placeholder="Message"
          />
        </View>
        <IconButton
          name="angle-right"
          iconColor="white"
          color={"#1977f2"}
          size={24}
          onPress={addMessage}
        />
      </View>
      {/* <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Numeric input here"
              keyboardType="numeric"
            /> */}
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#EEEEEE",
  },
  input: {
    flex: 1,

    elevation: 1,
    marginBottom: 10,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },

  headerText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  headerText2: {
    color: "gray",
    fontSize: 14,
  },
});
