import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  Modal,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Feather, Entypo } from "@expo/vector-icons";
import firebaseApp from "../../constants/firebase/firebase";

import { AuthContext } from "../../store/authContext";

import { getUser } from "../../constants/firebase/dataQueries";

import Button1 from "../../components/ui/Button-1";
import { Colors } from "../../constants/Colors";
import SelectDropdown from "react-native-select-dropdown";
import { fonts } from "../../constants/fonts";
import Button2 from "../../components/ui/Button-2";
import Button3 from "../../components/ui/Button-3";
import { getFullDate } from "../../constants/Formating";
import TextInputWithLabel from "../../components/ui/TextInputWithLabel";
import LoadingComponent from "../../components/ui/LoadingComponent";

const location = [
  "Habowal,Ludhiana",
  "Dal Vihar,Ludhiana",
  "Gill,Ludhiana",
  "America,Ludhiana",
  "asgard,Ludhiana",
  "new York, Ludhiana",
];

const db = getFirestore(firebaseApp);
const userref = collection(db, "users");

const CreateTask = ({ navigation }) => {
  const [data, setData] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [date, setDate] = useState(new Date());
  const [remoteTask, setRemoteTask] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [onDate, setOnDate] = useState({
    ondate: true,
    beforedate: false,
    flexible: false,
  });
  const [time, setTime] = useState({
    morning: true,
    midday: false,
    afternoon: false,
    evening: false,
  });

  const ctx = useContext(AuthContext);

  const users = async () => {
    const user = await getUser();
    setUserInfo(user);
  };

  useEffect(() => {
    users();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const CreateTask = async () => {
    setIsEnabled(true);
    const a = await addDoc(collection(userref, ctx.user?.uid, "tasks"), {
      ...data,
      date: date,
      Budget: data.budget,
      status: "open",
      profilePic: userInfo?.profilePic,
      uid: ctx.user.uid,
      createdAt: serverTimestamp(),
      type: onDate,
      time: time,
      remoteTask: remoteTask,
    });
    setIsEnabled(false);
    navigation.navigate("TabsNavigation");
  };

  if (isEnabled) {
    return <LoadingComponent />;
  }
  return (
    <ScrollView style={{ paddingHorizontal: 30 }}>
      <TextInputWithLabel
        onChangeText={(text) => {
          setData((prev) => ({ ...prev, title: text }));
        }}
        placeHolder="eg. Clean my 2 bedroom apartment">
        SHORTLY DEFINE. WHAT NEED TO BE DONE?
      </TextInputWithLabel>
      <View>
        <Text style={styles.subTitle}>WHEN YOU NEED TO BE DONE?</Text>
        <Pressable
          onPress={showDatepicker}
          style={{ width: "50%", backgroundColor: "white" }}>
          <Text
            style={[
              styles.input,
              {
                height: 50,
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 20,
                borderRadius: 5,
                fontFamily: fonts.bold,
              },
            ]}>
            {getFullDate(date)}
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}>
          <Button3
            text={"on date"}
            color={onDate["ondate"] ? "white" : "black"}
            backgroundColor={
              onDate["ondate"] ? Colors.secondary : "transparent"
            }
            borderColor={Colors.secondary}
            onPress={() =>
              setOnDate((prev) => ({
                ...prev,
                ondate: true,
                beforedate: false,
                flexible: false,
              }))
            }
          />
          <Button3
            text="Before Date"
            color={onDate["beforedate"] ? "white" : "black"}
            backgroundColor={
              onDate["beforedate"] ? Colors.secondary : "transparent"
            }
            borderColor="black"
            onPress={() =>
              setOnDate((prev) => ({
                ...prev,
                ondate: false,
                beforedate: true,
                flexible: false,
              }))
            }
          />
          <Button3
            text={"flexible"}
            borderColor="black"
            color={onDate["flexible"] ? "white" : "black"}
            backgroundColor={
              onDate["flexible"] ? Colors.secondary : "transparent"
            }
            onPress={() =>
              setOnDate((prev) => ({
                ...prev,
                ondate: false,
                beforedate: false,
                flexible: true,
              }))
            }
          />
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.subTitle}>TIME</Text>
        <View style={styles.timeView}>
          <Button3
            color={time["morning"] ? "white" : "black"}
            backgroundColor={time["morning"] ? Colors.secondary : "transparent"}
            text="Morning"
            time={"BEFORE 10AM"}
            icon={
              <Feather
                name="sunrise"
                size={24}
                color={time["morning"] ? "white" : "black"}
              />
            }
            onPress={() =>
              setTime((prev) => ({
                ...prev,
                morning: true,
                midday: false,
                afternoon: false,
                evening: false,
              }))
            }
          />
          <Button3
            text="Midday"
            time={"10AM - 2PM"}
            icon={
              <Feather
                name="sun"
                size={24}
                color={time["midday"] ? "white" : "black"}
              />
            }
            onPress={() =>
              setTime((prev) => ({
                ...prev,
                morning: false,
                midday: true,
                afternoon: false,
                evening: false,
              }))
            }
            color={time["midday"] ? "white" : "black"}
            backgroundColor={time["midday"] ? Colors.secondary : "transparent"}
          />
          <Button3
            text="Afternoon"
            time={"2PM - 6PM"}
            icon={
              <Feather
                name="sunset"
                size={24}
                color={time["afternoon"] ? "white" : "black"}
              />
            }
            onPress={() =>
              setTime((prev) => ({
                ...prev,
                morning: false,
                midday: false,
                afternoon: true,
                evening: false,
              }))
            }
            color={time["afternoon"] ? "white" : "black"}
            backgroundColor={
              time["afternoon"] ? Colors.secondary : "transparent"
            }
          />
          <Button3
            text="Evening"
            time={"AFTER 6PM"}
            icon={
              <Entypo
                name="moon"
                size={24}
                color={time["evening"] ? "white" : "black"}
              />
            }
            onPress={() =>
              setTime((prev) => ({
                ...prev,
                morning: false,
                midday: false,
                afternoon: false,
                evening: true,
              }))
            }
            color={time["evening"] ? "white" : "black"}
            backgroundColor={time["evening"] ? Colors.secondary : "transparent"}
          />
        </View>
      </View>

      <Text style={styles.title}>Where</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.subTitle}>IS THIS A REMOTE TASK?</Text>
        <View
          style={{
            flexDirection: "row",
            height: 70,
          }}>
          <Button3
            text={"Yes"}
            color={remoteTask ? "white" : "black"}
            backgroundColor={remoteTask ? Colors.secondary : "transparent"}
            onPress={() => setRemoteTask(true)}
          />
          <Button3
            text={"No"}
            color={!remoteTask ? "white" : "black"}
            backgroundColor={!remoteTask ? Colors.secondary : "transparent"}
            onPress={() => setRemoteTask(false)}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text>LOCATION</Text>
        <SelectDropdown
          data={location}
          onSelect={(selectedItem, index) => {
            setData((prev) => ({
              ...prev,
              location: selectedItem,
            }));
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          search
          rowStyle={{ borderWidth: 0, backgroundColor: "white" }}
          buttonTextStyle={{
            fontFamily: fonts.bold,
          }}
          buttonStyle={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: "transparent",
            marginVertical: 25,
          }}
        />
      </View>

      {/* <TextInput
        onChangeText={(text) => {
          setData((prev) => ({ ...prev, Budget: text }));
        }}
        placeholder="Budget"
      /> */}
      <View
        style={{
          height: 70,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Button3
          text="Back"
          color={"white"}
          backgroundColor={Colors.secondary}
          borderColor={Colors.secondary}
        />
        <Button3
          text="next"
          color={"white"}
          backgroundColor="#1DBF73"
          borderColor="#1DBF73"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#030303a9",
          }}>
          <View
            style={{
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "white",
              padding: 30,
            }}>
            <TextInputWithLabel
              onChangeText={(text) => {
                setData((prev) => ({ ...prev, budget: text }));
              }}>
              Budget
            </TextInputWithLabel>
            <Button2
              onPress={CreateTask}
              iconName="save"
              iconColor="white"
              backgroundColor={Colors.secondary}>
              Create Task
            </Button2>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    // justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.extrabold,
  },
  subTitle: {
    color: "#898080",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    // borderRadius: 5,
    fontSize: 16,
    padding: 5,
    height: 50,
  },
  innerContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  timeView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  // tab: {
  //     flexDirection: "row",
  //     justifyContent: "space-evenly",
  // },
  // inner: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginBottom: 5,
  //     alignItems: "center",
  // },
  // add: {
  //     color: "blue",
  // },
});

export default CreateTask;
