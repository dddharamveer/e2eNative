import {
    View,
    Text,
    Switch,
    StyleSheet,
    Button,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import Tasks from "../../components/Tasks";
import ButtonUi from "../../components/ui/ButtonsUi";
import { Colors } from "../../constants/Colors";
import Task2 from "../../components/Task2";

const MyTasks = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Pressable
                    style={[
                        styles.button,
                        isEnabled && { backgroundColor: Colors.secondary },
                    ]}
                    onPress={() => setIsEnabled(true)}>
                    <Text
                        style={
                            isEnabled
                                ? { color: "white" }
                                : { color: "#D9D9D9" }
                        }>
                        Task Posted
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.button,
                        !isEnabled && { backgroundColor: Colors.secondary },
                    ]}
                    onPress={() => setIsEnabled(false)}>
                    <Text
                        style={
                            !isEnabled
                                ? { color: "white" }
                                : { color: "#D9D9D9" }
                        }>
                        Task Taken
                    </Text>
                </Pressable>
            </View>

            {isEnabled ? (
                <Task2
                    title="Pantry organizing"
                    date="Wed, 3 August"
                    profile="https://i.imgur.com/DvpvklR.png"
                    location="North kellyville NSW,"
                    price={400}
                    status="open"
                    date=""
                />
            ) : (
                <View style={styles.taken}>
                    <Text style={styles.text}>
                        You have not taken any task.
                    </Text>
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
        borderColor: Colors.secondary,
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
