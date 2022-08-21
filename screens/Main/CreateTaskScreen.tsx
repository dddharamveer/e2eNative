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
import { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Feather, Entypo, EvilIcons, MaterialIcons } from "@expo/vector-icons";

import { AuthContext } from "../../store/authContext";
import { getUser } from "../../Firebase/dataQueries";
import SelectDropdown from "react-native-select-dropdown";
import Button2 from "../../components/UI/Button-2";
import Button3 from "../../components/UI/Button-3";
import { getFullDate } from "../../constants/Formating";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import LoadingScreen from "../../components/UI/LoadingScreen";
import { db } from "../../Firebase/firebaseConfig";
import { MainStackScreenProps } from "../../types";
import Colors from "../../constants/Colors";

const location = [
  "Habowal,Ludhiana",
  "Dal Vihar,Ludhiana",
  "Gill,Ludhiana",
  "America,Ludhiana",
  "asgard,Ludhiana",
  "new York, Ludhiana",
];

const userref = collection(db, "users");

const CreateTaskScreen = ({
  navigation,
}: MainStackScreenProps<"CreateTask">) => {
  const [data, setData] = useState<{
    budget: string;
    title: string;
    location: string;
  }>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [date, setDate] = useState(null);
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
    const user: any = await getUser();
    setUserInfo(user);
  };

  useEffect(() => {
    users();
  }, []);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: new Date(),
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
      Budget: data?.budget,
      status: "open",
      profilePic: userInfo?.profilePic,
      uid: ctx.user.uid,
      createdAt: serverTimestamp(),
      type: onDate,
      time: time,
      remoteTask: remoteTask,
    });
    setIsEnabled(false);
    navigation.navigate("Root");
  };

  if (isEnabled) {
    return <LoadingScreen />;
  }
  return (
    <ScrollView style={{ paddingHorizontal: 30, backgroundColor: "white" }}>
      <TextInputWithLabel
        onChangeText={(text) => {
          setData((prev: any) => ({ ...prev, title: text }));
        }}
        placeHolder="eg. Clean my 2 bedroom apartment"
      >
        Title
      </TextInputWithLabel>
      <View>
        <Text style={styles.subTitle}>When you need to be done?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <Button3
            text={"on date"}
            color={onDate["ondate"] ? "white" : "black"}
            backgroundColor={
              onDate["ondate"] ? Colors.light.background : "transparent"
            }
            borderColor="black"
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
              onDate["beforedate"] ? Colors.light.background : "transparent"
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
              onDate["flexible"] ? Colors.light.background : "transparent"
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
            backgroundColor={
              time["morning"] ? Colors.light.background : "transparent"
            }
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
            backgroundColor={
              time["midday"] ? Colors.light.background : "transparent"
            }
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
              time["afternoon"] ? Colors.light.background : "transparent"
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
            backgroundColor={
              time["evening"] ? Colors.light.background : "transparent"
            }
          />
        </View>
      </View>

      <Text style={styles.subTitle}>Project Detail</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Feather name="calendar" size={22} color="gray" />
        <Pressable onPress={showDatepicker}>
          <Text
            style={{
              height: 50,
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 20,
              marginHorizontal: 10,
              color: date ? "black" : "gray",
            }}
          >
            {date ? getFullDate(date) : "Select Date"}
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: -5,
        }}
      >
        <EvilIcons
          name="location"
          size={30}
          color="gray"
          style={{ alignSelf: "center" }}
        />
        <SelectDropdown
          data={location}
          renderCustomizedButtonChild={() => {
            return (
              <View>
                <Text style={{ fontSize: 20, color: "grey" }}>
                  {data?.location ? data.location : "Location"}
                </Text>
              </View>
            );
          }}
          onSelect={(selectedItem, index) => {
            setData((prev: any) => ({
              ...prev,
              location: selectedItem,
            }));
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          search
          rowStyle={{ borderWidth: 0, backgroundColor: "white" }}
          buttonStyle={{
            backgroundColor: "transparent",
          }}
        />
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 50 }}
      >
        <MaterialIcons name="description" size={24} color="gray" />
        <TextInput
          style={{
            height: 50,
            width: "100%",
            marginHorizontal: 10,
            fontSize: 20,
          }}
          placeholder="Add description"
          onChangeText={(text) =>
            setData((prev: any) => ({ ...prev, description: text }))
          }
        />
      </View>

      <Button2
        backgroundColor={Colors.light.background}
        onPress={() => setModalVisible(true)}
      >
        Create Project
      </Button2>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#030303a9",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "white",
              padding: 30,
            }}
          >
            <TextInputWithLabel
              onChangeText={(text) => {
                setData((prev: any) => ({
                  ...prev,
                  budget: text,
                }));
              }}
            >
              Budget
            </TextInputWithLabel>
            <Button2
              onPress={CreateTask}
              iconName="save"
              iconColor="white"
              backgroundColor={"green"}
            >
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
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
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

export default CreateTaskScreen;
