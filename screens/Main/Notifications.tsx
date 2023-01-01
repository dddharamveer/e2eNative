import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useContext, useEffect } from "react";
import MessagesCard from "../../components/MessagesCard";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../store/authContext";
import { async } from "@firebase/util";
import LoadingScreen from "../../components/UI/LoadingScreen";
import IconButton from "../../components/UI/IconButton";
var Notifications_messages: boolean = true;

export default function Notifications({ navigation }: { navigation: any }) {
  const noMessages = (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>No Notifications to show yet!</Text>
    </View>
  );
  const [name, setName] = React.useState<string>("");
  const [user, setUser] = React.useState<any>(null);
  const [chatrooms, setChatrooms] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const ctx = useContext<any>(AuthContext);
  const searchUser = async () => {
    const collectionref = collection(db, "users");
    const querye = query(collectionref, where("Name", "==", name), limit(1));
    const querySnapshot = await getDocs(querye);
    const array = querySnapshot.docs.map((doc) => doc.data());
    if (array[0]?.uid !== ctx.userData.uid) {
      setUser(array[0]);
    }
  };
  if (!Notifications_messages) {
    return noMessages;
  }

  const getUserChats = async () => {
    setLoading(true);
    console.log(ctx.userData.uid);

    const collectionref = collection(db, "users");
    const docref = doc(collectionref, ctx.userData.uid);
    const docSnap = await getDoc(docref);

    const chatroom: any = [];

    if (docSnap.exists()) {
      const chats = docSnap.data()?.chats;
      console.log(chats);

      if (chats?.length > 0) {
        console.log("here");

        await Promise.all(
          chats?.map(async (chat: any) => {
            const collectionref = collection(db, "chats");
            const docref = doc(collectionref, chat);
            const docSnap: any = await getDoc(docref);
            const chatd = docSnap.data();
            const senderUid = chatd.users.find(
              (user: any) => user !== ctx.userData.uid
            );

            const user = await getDoc(doc(collection(db, "users"), senderUid));

            if (docSnap.exists()) {
              chatroom.push({
                user: user.data(),
                chat: chatd,
              });

              console.log(chatroom, "chatroom");
            } else {
              console.log("No such document!");
            }
          })
        );
      }
    }
    console.log(chatroom, "chatroom");

    setChatrooms(chatroom);
    setLoading(false);
  };

  const createNewChat = async (user: any) => {
    setLoading(true);
    const collectionref = collection(db, "chats");
    const collectionref2 = collection(db, "users");
    const userExists = chatrooms.find((chat: any) =>
      chat.users.find((userd: any) => userd === user.uid)
    );
    if (!userExists) {
      const add = await addDoc(collectionref, {
        messages: [],
        users: [user.uid, ctx.userData.uid],
      });

      const addidtodoc = await updateDoc(doc(collectionref, add.id), {
        id: add.id,
      });

      const setdoc1 = await updateDoc(doc(collectionref2, user.uid), {
        chats: arrayUnion(add.id),
      });
      const setdoc2 = await updateDoc(doc(collectionref2, ctx.userData.uid), {
        chats: arrayUnion(add.id),
      });
      getUserChats();
    } else {
      console.log("Chat already exists");
    }
    setLoading(false);
  };
  console.log(chatrooms, "chatrooms");

  useEffect(() => {
    searchUser();
  }, [name]);

  useEffect(() => {
    getUserChats();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            margin: 10,
            flex: 1,
            backgroundColor: "#f8f8fa",
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          onChangeText={(text) => setName(text)}
        />
        <Pressable
          onPress={getUserChats}
          style={{
            padding: 10,
            elevation: 5,
            backgroundColor: "white",
            borderRadius: 50,
            marginRight: 10,
          }}
        >
          <Ionicons
            name="reload"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </Pressable>
      </View>

      <View>
        {user && (
          <View
            style={{
              margin: 10,

              borderRadius: 50,
              padding: 15,
              paddingHorizontal: 20,
              elevation: 5,
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {user?.Name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                }}
              >
                {user?.email}
              </Text>
            </View>
            <Pressable
              android_ripple={{ color: "white" }}
              onPress={() => {
                createNewChat(user);
              }}
              style={{
                padding: 10,
                backgroundColor: "#187afa",
                borderRadius: 50,
              }}
            >
              <Ionicons name="chatbox" size={24} color="white" />
            </Pressable>
          </View>
        )}
      </View>
      <View style={{ flex: 1 }}>
        {chatrooms?.map((chat: any, index: number) => {
          console.log(chat, "chat");

          return (
            <MessagesCard
              key={index}
              name={chat.user.Name}
              latestMessage={
                chat.chat.messages[chat.chat.messages.length - 1]?.message
              }
              openChat={() => {
                navigation.navigate("Chat", { chat: chat });
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
