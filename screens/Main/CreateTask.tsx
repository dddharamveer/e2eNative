import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    Button,
    Pressable,
    ScrollView,
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
    const [removalTask, setRemovalTask] = useState(false);
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
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* <Text style={styles.add}>+ Add must-haves</Text>
        <View style={[styles.inner]}>
                    <Text>Can this task be completed remotely?</Text>
                    <Switch
                        thumbColor={isEnabled ? Colors.secondary : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View> */}
                <Text style={styles.title}>Title & Date</Text>
                <View style={styles.innerContainer}>
                    {/* <Text style={{ color: "red" }}>0 / 10+</Text> */}
                    <Text style={styles.subTitle}>
                        SHORTLY DEFINE. WHAT NEED TO BE DONE?
                    </Text>
                    <TextInput
                        placeholder="eg. Clean my 2 bedroom apartment"
                        style={styles.input}
                        onChangeText={(text) => {
                            setData((prev) => ({ ...prev, title: text }));
                        }}
                    />
                </View>

                <View>
                    <Text style={styles.subTitle}>
                        WHEN YOU NEED TO BE DONE?
                    </Text>
                    <Pressable onPress={showDatepicker}>
                        <Text
                            style={[
                                styles.input,
                                {
                                    height: 50,
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                    fontSize: 22,
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
                                onDate["ondate"] ? "#3F3D56" : "transparent"
                            }
                            borderColor="#3F3D56"
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
                                onDate["beforedate"] ? "#3F3D56" : "transparent"
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
                                onDate["flexible"] ? "#3F3D56" : "transparent"
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
                                time["morning"] ? "#3F3D56" : "transparent"
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
                                time["midday"] ? "#3F3D56" : "transparent"
                            }
                        />
                        <Button3
                            text="Afternoon"
                            time={"2PM - 6PM"}
                            icon={
                                <Feather
                                    name="sunset"
                                    size={24}
                                    color={
                                        time["afternoon"] ? "white" : "black"
                                    }
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
                                time["afternoon"] ? "#3F3D56" : "transparent"
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
                                time["evening"] ? "#3F3D56" : "transparent"
                            }
                        />
                    </View>
                </View>

                <Text style={styles.title}>Where</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.subTitle}>IS THIS A REMOVAL TASK?</Text>
                    <View
                        style={{
                            flexDirection: "row",
                        }}>
                        <Button3
                            text={"Yes"}
                            color={removalTask ? "white" : "black"}
                            backgroundColor={
                                removalTask ? "#3F3D56" : "transparent"
                            }
                            onPress={() => setRemovalTask(true)}
                        />
                        <Button3
                            text={"No"}
                            color={!removalTask ? "white" : "black"}
                            backgroundColor={
                                !removalTask ? "#3F3D56" : "transparent"
                            }
                            onPress={() => setRemovalTask(false)}
                        />
                    </View>
                </View>
                <View>
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
                        buttonTextStyle={{ fontFamily: fonts.bold }}
                        buttonStyle={{
                            width: "100%",
                            borderRadius: 10,
                            backgroundColor: "white",
                            marginVertical: 25,
                            elevation: 4,
                        }}
                    />
                </View>
                {/* </View> */}
                <TextInput
                    onChangeText={(text) => {
                        setData((prev) => ({ ...prev, Budget: text }));
                    }}
                    placeholder="Budget"
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Button3
                        text="Back"
                        color={"white"}
                        backgroundColor="#3F3D56"
                        borderColor="#3F3D56"
                    />
                    <Button3
                        text="next"
                        color={"white"}
                        backgroundColor="#1DBF73"
                        borderColor="#1DBF73"
                    />
                </View>
            </SafeAreaView>
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
