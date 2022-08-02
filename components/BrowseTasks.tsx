import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Tasks from "./Tasks";

const BrowseTasks = () => {
    return (
        <View style={styles.container}>
            <Tasks title="Fix door handle" date="Wed, Aug 3" image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4" open location="Sunshine West VIC, Australia" price={750} time="Anytime" />
            <Tasks title="Fix door handle" date="Wed, Aug 3" image="https://avatars.githubusercontent.com/u/54268396?s=96&v=4" open location="Sunshine West VIC, Australia" price={750} time="Anytime" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: 'gray',
    },
});

export default BrowseTasks;
