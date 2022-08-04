import { View, Text, Switch, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Tasks from "../components/Tasks";
import ButtonUi from "../components/ui/ButtonsUi";

const MyTasks = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text>Task Posted</Text>
                <Text>Task Taken</Text>
            </View>
            {/* <Tasks
                title="Pantry organizing"
                date="Wed, 3 August"
                image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4"
                open
                location="North kellyville NSW,"
                price={400}
                time="Anytime"
            /> */}
            <View style={styles.taken}>
                <Text style={styles.text}>You have not taken any task.</Text>
                <Text>Earn by doing tasks</Text>
            </View>
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
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 35,
        alignItems: "center",
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
});

export default MyTasks;
