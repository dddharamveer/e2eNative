import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const Button3 = ({
    text,
    color,
    backgroundColor,
    borderColor,
    time,
    icon,
    onPress,
}) => {
    return icon ? (
        <View style={[styles.timeBtn, { backgroundColor, borderColor }]}>
            <Pressable style={{ alignItems: "center" }} onPress={onPress}>
                {icon && icon}
                <Text style={{ color, fontSize: 14, marginTop: 6 }}>{text}</Text>
                {time && <Text style={{ color, fontSize: 11 }}>{time}</Text>}
            </Pressable>
        </View>
    ) : (
        <View>
            <Pressable onPress={onPress}>
                <Text
                    style={[
                        styles.text,
                        { color, backgroundColor, borderColor },
                    ]}>
                    {text}
                </Text>
            </Pressable>
        </View>
    );
};

export default Button3;

const styles = StyleSheet.create({
    timeBtn: {
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: "center",
        width: 90,
        height: 90,
        marginRight: 10,
    },
    text: {
        width: 100,
        height: 40,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        borderRadius: 10,
        textTransform: "uppercase",
        borderWidth: 1,
        marginRight: 10,
    },
});
