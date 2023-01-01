import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Task from "../../components/Task";
import Colors from "../../constants/Colors";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { AuthContext } from "../../store/authContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const MyTasks = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const ctx = useContext(AuthContext);
  const [posted, setPosted] = useState<any>([]);
  const navigation = useNavigation();
 
  const getPostedTasks = async () => {
    const collectionref = collection(db,
      "users",
      ctx.user.uid,
      "tasks",
      );
    const querySnapshot = await getDocs(collectionref);
        console.log("ksdfjk");
        console.log(querySnapshot.docs.map((doc) => doc.data()));
        
    setPosted(querySnapshot.docs.map((doc) => doc.data()));
    
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {

    getPostedTasks();
    });
    return unsubscribe;
  }, [
    navigation,
  ]);
  console.log(posted, "posted");
  
  return (
    <View style={styles.container}>
       
      <View style={styles.inner}>
        <Pressable
          style={[
            styles.button,
            isEnabled && { backgroundColor: Colors.light.background },
          ]}
          onPress={() => setIsEnabled(true)}
        >
          <Text style={isEnabled ? { color: "white" } : { color: "#D9D9D9" }}>
            Task Posted
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            !isEnabled && { backgroundColor: Colors.light.background },
          ]}
          onPress={() => setIsEnabled(false)}
        >
          <Text style={!isEnabled ? { color: "white" } : { color: "#D9D9D9" }}>
            Task Taken
          </Text>
        </Pressable>
      </View>

      {isEnabled ? (
      
        posted?.map((task:any,index:number) => {
      return  <Task
      key={index}
          title={task.title}
          date={new Date(task.date.seconds * 1000)}
          profile={task.profilePic}
          location={task.location}
          price={task.Budget}
          status={task.status}
        />})
      ) : (
        <View style={styles.taken}>
          <Text style={styles.text}>You have not taken any task.</Text>
          <Text>Earn by doing tasks</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  inner: {
    width: 310,
    height: 50,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderColor: Colors.light.background,
    borderWidth: 2,
    borderRadius: 35,
    marginBottom: 25,
    // paddingHorizontal: ,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
  taken: {
    alignItems: "center",
  },
  button: {
    height: "100%",
    flex: 1 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
});

export default MyTasks;
