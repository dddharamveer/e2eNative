import {
    Button,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useContext, useState } from "react";
import TextInputUi from "../../components/ui/TextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "../../constants/firebase/firebase";
import { AuthContext } from "../../store/authContext";
import { getStorage } from "firebase/storage";
import Button1 from "../../components/ui/Button-1";

const storage = getStorage(firebaseApp);
const CreateTask = () => {
    const db = getFirestore(firebaseApp);
    const [Name, setName] = useState();
    const [Budget, setBudget] = useState();
    const [open, setOpen] = useState();
    const [Location, setLocation] = useState();
    const [date, setdate] = useState();
    const ctx = useContext(AuthContext);

    const buttonClick = async () => {
        const userref = collection(db, "users");
        const a = await addDoc(collection(userref, ctx.user?.uid, "tasks"), {
            name: Name,
            budget: Budget,
            date: date,
            status: open,
        });
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
                    />
                </View>

                <Text style={styles.add}>+ Add must-haves</Text>
                <View style={[styles.inner]}>
                    <Text>Can this task be completed remotely?</Text>
                    <Switch />
                </View>
                <View style={{}}>
                    <Text>Task location (zip code)</Text>
                    <Text>Virginia Beach, VA, USA</Text>
                </View>
            </View>

            <Button1  backgroundColor="green" onPress={buttonClick}>Continue</Button1>
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
