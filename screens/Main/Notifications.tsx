import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import MessagesCard from "../../components/MessagesCard";
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import {
  Ionicons
} from '@expo/vector-icons';
import { AuthContext } from "../../store/authContext";
import { async } from "@firebase/util";
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

  const ctx = useContext<any>(
    AuthContext
  );
  const searchUser = async () => {
    const collectionref = collection(db, "users");
    const querye = query(collectionref, where("Name", "==", name), limit(1));
    const querySnapshot = await getDocs(querye);
    const array = querySnapshot.docs.map((doc) => doc.data());
    if (array[0]?.uid !== ctx.userData.uid) {
      setUser(
        array[0]
      );
    }
  }
  if (!Notifications_messages) {
    return noMessages;
  }

 

  const getUserChats = async () => {
    console.log(ctx.userData.uid);
    
    const collectionref = collection(db, "users");
    const docref = doc(collectionref, ctx.userData.uid);
    const docSnap = await getDoc(docref);

    const chatroom: any = [];

    if (docSnap.exists()) {
      const chats = docSnap.data()?.chats;
      console.log(chats);
      
      if(chats?.length > 0 ){
        console.log("here");
        
        await Promise.all (chats?.map(async (chat: any) => {
        const collectionref = collection(db, "chats");
        const docref = doc(collectionref, chat);
        const docSnap = await getDoc(docref);
          
        
        if (docSnap.exists()) {
          chatroom.push(docSnap.data());
          console.log(docSnap.data());
          
          console.log(chatroom, "chatroom");
          
        } else {
          console.log("No such document!");
        }
      }))
      
    }
   
   
    } 
    console.log(chatroom, "chatroom");
    
    setChatrooms(chatroom);
  };

console.log(chatrooms);

  const createNewChat = async (user: any) => {
    const collectionref = collection(db, "chats");
    const collectionref2 = collection(db, "users");
    const userExists = chatrooms.find((chat: any) => chat.users.find((userd: any) => userd === user.uid));
    if (!userExists) {
      const add = await addDoc(collectionref, {
        messages: [],
        users: [user.uid,
        ctx.userData.uid
        ],
        
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
    }
    else {
      console.log("Chat already exists");

    }

  };

  useEffect(() => {
    searchUser();
  }, [name]);

  useEffect(() => {
      
  navigation.addListener('focus', () => {
    getUserChats();
  });
  }, [
    navigation
  ]);

  return (
    <ScrollView>

      <TextInput placeholder="Enter User Name" style={{ margin: 10, borderWidth: 1, borderRadius: 10, padding: 10 }}
        onChangeText={(text) => setName(text)}
      />

      <View>

        {user &&
          <View

            style={{
              margin: 10,
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              elevation: 5,
              flexDirection: "row",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <View >
              <Text>{user?.Name}</Text>
              <Text>{user?.email}</Text></View>
            <Pressable onPress={
              () => {
                createNewChat(user);

              }
            }
              style={{
                padding: 10,
                backgroundColor: "green",
                borderRadius: 10,
              }}
            >
              <Ionicons name="chatbox" size={24} color="white" />
            </Pressable>

          </View>}

      </View>
      <View style={{ flex: 1 }}>
      
        {
          chatrooms?.map((chat: any,index:number) => {
            return (
              <MessagesCard
                key={index}
               latestMessage = {chat.messages[chat.messages.length-1].message}

                openChat={() => {
                  navigation.navigate("Chat", { chat: chat });
                }}
              />
            );
          })
        }

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
