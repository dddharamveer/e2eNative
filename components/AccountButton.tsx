import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const AccountButton = ({ text }: { text: string }) => {
    return (
        <View style={styles.text}>
            <Text>{text}</Text>
            <FontAwesome5 name="arrow-right" color="#898080" />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        backgroundColor: "#EAE6E680",
        height: 50,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 4,
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default AccountButton;
