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
            <View>
                <Text style={styles.title}>{title}</Text>
                {/* location */}
                <View style={styles.icons}>
                    <FontAwesome5 name="map-marker" color="gray" />
                    <Text style={styles.subs}>{location}</Text>
                </View>
                <View style={styles.icons}>
                    <FontAwesome5 name="calendar-day" color="gray" />
                    <Text style={styles.subs}>{date}</Text>
                </View>
                <View style={styles.icons}>
                    <FontAwesome5 name="clock" color="gray" />
                    <Text style={styles.subs}>{time}</Text>
                </View>
                {open ? <Text style={styles.subs}>OPEN</Text> : ""}
            </View>
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                }}>
                {/* Price */}
                <Text style={styles.price}>INR {price}</Text>
                {/* Pic */}
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 3,
    },
    title: {
        fontSize: 28,
        marginBottom: 8,
    },
    subs: {
        marginBottom: 3,
        fontSize: 14,
        marginLeft: 3,
    },
    price: {
        fontSize: 32,
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
