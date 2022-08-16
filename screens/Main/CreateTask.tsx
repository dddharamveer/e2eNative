import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    Button,
    Pressable,
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
                <Text style={styles.subTitle}>WHEN YOU NEED TO BE DONE?</Text>
                {/* <Button2
                    onPress={showDatepicker}
                    iconName="calendar"
                    backgroundColor="black"
                    iconColor="white">
                    Date Picker
                </Button2> */}
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
                        marginTop: 10,
                    }}>
                    <Button3
                        text={"on date"}
                        color="white"
                        backgroundColor="#3F3D56"
                        borderColor="#3F3D56"
                    />
                    <Button3 text="Before Date" borderColor="black" />
                    <Button3 text={"flexible"} borderColor="black" />
                </View>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.subTitle}>TIME</Text>
                <View style={styles.timeView}>
                    <Button3 text="Morning" />
                    <Button3 text="Midday" />
                    <Button3 text="Afternoon" />
                    <Button3 text="Evening" />
                </View>
            </View>

            <Text style={styles.title}>Where</Text>
            <View style={styles.innerContainer}>
                <Text style={styles.subTitle}>IS THIS A REMOVEL TASK?</Text>
                <View
                    style={{
                        flexDirection: "row",
                    }}>
                    <Button3 text={"Yes"} />
                    <Button3 text={"No"} />
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
                <Button3 text="Back" />
                <Button3 text="next" />
            </View>
        </SafeAreaView>
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
        fontSize: 18,
        fontFamily: fonts.extrabold,
        // fontWeight: "bold",
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
