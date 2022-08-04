import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type Task = {
    title: string;
    location: string;
    date: string;
    time: string;
    price: number;
    image: string;
    open: boolean;
};

const Tasks: React.FC<Task> = ({
    title,
    location,
    date,
    time,
    price,
    image,
    open,
}) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                {/* location */}
                <View style={styles.icons}>
                    <FontAwesome5 name="location-arrow" color="#D9D9D9" />
                    <Text style={styles.subs}>{location}</Text>
                </View>
                <View style={styles.icons}>
                    <FontAwesome5 name="calendar" color="#D9D9D9" />
                    <Text style={styles.subs}>{date}</Text>
                </View>
            </View>
            <View style={styles.icons}>
                <FontAwesome5 name="clock" color="#D9D9D9" />
                <Text style={styles.subs}>{time}</Text>
            </View>
            {open ? <Text style={styles.subs}>OPEN</Text> : ""}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderColor: "#7E7C7C66",
        borderWidth: 1,
        margin: 10,
        borderRadius: 24,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
        width: 200,
    },
    subs: {
        color: "#898080",
        marginBottom: 3,
        fontSize: 14,
        marginLeft: 3,
    },
    price: {
        fontSize: 24,
        fontWeight: "400",
    },
    image: {
        borderRadius: 50,
        height: 35,
        width: 35,
        marginBottom: 22,
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Tasks;
