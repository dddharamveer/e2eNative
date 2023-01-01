import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useContext,useEffect } from "react";

import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import IconButton from "../../components/UI/IconButton";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { AuthContext } from "../../store/authContext";

const Chat = ({
  navigation,
  route
}:any) => {
  const [text, onChangeText] = React.useState("");
  // const [number, onChangeNumber] = React.useState(null);
  //get the chat id from the route params
  const [messages , setMessages] = React.useState<any>([ ]);
  const  {chat} = route.params;
  console.log(chat);
  const ctx = useContext(AuthContext);
  const addMessage = async () => {
    if(text === "") return;

    const update = await updateDoc (doc(db, "chats", chat.id), {
      messages: arrayUnion({
        message: text,
        sender: ctx.userData.uid,
        timestamp: new Date().getTime(),
      }),
    });
    console.log(update);
    
    onChangeText("");

  }

  useEffect (() => {
    // const unsubscribe = db.collection("chats").doc(chat.id).onSnapshot((doc) => {
    //   setMessages(doc.data()?.messages);
    // });
    const unsubscribe = onSnapshot (doc(db, "chats", chat.id), (doc) => {
      setMessages(doc.data()?.messages);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
   
      {
        messages?.map((message:any) => (
          <View style={{flexDirection: "row", alignItems: "center", margin: 12 , backgroundColor: message.sender === ctx.userData.uid ? Colors.light.tint : "white", padding: 12, borderRadius: 12, maxWidth: "80%"}}
          key={message.timestamp}
          >
          
            <Text style={{marginLeft: 12}}>{message.message}</Text>
          </View>
        ))

      }
      <View
        style={{ flexDirection: "row", alignItems: "center", marginRight: 12 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 12,
          }}
        >
          <FontAwesome name="camera" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Message"

          />
        </View>
        <IconButton
          name="angle-right"
          iconColor="white"
          color={Colors.light.background}
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
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    flex: 1,
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 45 / 2,
  },
});
