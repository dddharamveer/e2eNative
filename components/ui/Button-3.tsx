import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Button3 = ({ text, color, backgroundColor, borderColor }) => {
    return (
        <View>
            <Text style={[styles.btn, { color, backgroundColor, borderColor }]}>
                {text}
            </Text>
        </View>
    );
};

export default Button3;

const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 40,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 10,
        textTransform: "uppercase",
        borderWidth: 1,
        marginBottom: 20,
    },
});
