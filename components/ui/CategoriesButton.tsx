import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Colors } from "../../contents/Colors";

type CategoriesButton = {
    mname: any;
    color: string;
    size: number;
    iconColor: string;
    onPress?: () => void;
};
const CategoriesButton: React.FC<CategoriesButton> = ({
    mname,
    color,
    size,
    iconColor,
    onPress,
}) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                { backgroundColor: color },
                pressed && styles.pressed,
                
            ]}
            onPress={onPress}>
           {mname && <MaterialCommunityIcons name={mname} size={size} color={iconColor} />}
        </Pressable>
    );
};

export default CategoriesButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 70,
        borderRadius: 70/2,
        elevation: 4,
    },
    pressed: {
        opacity: 0.7,
    },
});
