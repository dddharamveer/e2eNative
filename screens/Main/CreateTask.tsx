import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
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
import firebaseApp from "../../constants/firebase/firebase";

import { AuthContext } from "../../store/authContext";

import { getUser } from "../../constants/firebase/dataQueries";

import Button1 from "../../components/ui/Button-1";
import { Colors } from "../../constants/Colors";
import SelectDropdown from "react-native-select-dropdown";
import { fonts } from "../../constants/fonts";
import Button2 from "../../components/ui/Button-2";

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

  const ctx = useContext(AuthContext);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
    const a = await addDoc(collection(userref, ctx.user?.uid, "tasks"), {
      ...data,
      date: date,
      type: isEnabled,
      status: "open",
      profilePic: userInfo?.profilePic,
      uid: ctx.user.uid,
      createdAt: serverTimestamp(),
    });
    navigation.navigate("TabsNavigation");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.tab}>
          <Text>DETAILS</Text>
          <Text>DATE & TIME</Text>
          <Text>BUDGET</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.inner}>
            <Text>Task title</Text>
            <Text style={{ color: "red" }}>0 / 10+</Text>
          </View>
          <TextInput
            placeholder="eg. Clean my 2 bedroom apartment"
            style={styles.input}
            onChangeText={(text) => {
              setData((prev) => ({ ...prev, title: text }));
            }}
          />
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.inner}>
            <Text>Describe your task</Text>
            <Text style={{ color: "red" }}>0 / 25+</Text>
          </View>
          <TextInput
            style={[styles.input, { height: 100 }]}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            maxLength={250}
            onChangeText={(text) => {
              setData((prev) => ({ ...prev, description: text }));
            }}
          />
        </View>

        <Text style={styles.add}>+ Add must-haves</Text>
        <View style={[styles.inner]}>
          <Text>Can this task be completed remotely?</Text>
          <Switch
            thumbColor={isEnabled ? Colors.secondary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View>
          <Text>Task location (zip code)</Text>

          <SelectDropdown
            data={location}
            onSelect={(selectedItem, index) => {
              setData((prev) => ({ ...prev, location: selectedItem }));
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            search
            rowStyle={{ borderWidth: 0, backgroundColor: "white" }}
            buttonTextStyle={{ fontFamily: fonts.bold }}
            buttonStyle={{
              width: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 25,

              elevation: 4,
            }}
          />
          <Button2
            onPress={showDatepicker}
            iconName="calendar"
            backgroundColor="black"
            iconColor="white">
            Date Picker
          </Button2>
        </View>
      </View>
      <TextInput
        onChangeText={(text) => {
          setData((prev) => ({ ...prev, Budget: text }));
        }}
        placeholder="Budget"
      />
      <Button1 backgroundColor="green" onPress={CreateTask}>
        Continue
      </Button1>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  innerContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontSize: 16,
    padding: 5,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
  },
  add: {
    color: "blue",
  },
});

export default CreateTask;
