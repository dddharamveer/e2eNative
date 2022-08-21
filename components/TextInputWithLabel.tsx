import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextInputWithLabel = ({
    placeHolder,
    children,
    onChangeText,
}: {
    placeHolder?: string;
    children: React.ReactNode;
    onChangeText?: (text: string) => void;
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{children}</Text>
            <TextInput
                placeholder={placeHolder}
                onChangeText={onChangeText}
                style={styles.textInput}
            />
        </View>
    );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 18,
    },
    label: {
        fontSize: 18,
        fontWeight: "600",
    },
    textInput: {
        backgroundColor: "white",
        height: 60,
        borderBottomWidth: 1,
        fontSize: 18,
        paddingHorizontal: 5,
    },
});
