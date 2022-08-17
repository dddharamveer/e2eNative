import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../constants/fonts";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { getFullDate } from "../constants/Formating";

const Task2 = ({ title, price, status, location, profile, date, onPress }) => {
    console.log(date);

    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "lightgrey" }}
            style={{
                // flex: 1,
                padding: 15,
                margin: 10,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 5,
            }}>
            <View
                style={{
                    justifyContent: "space-between",
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontFamily: fonts.bold,
                            fontSize: 18,
                        }}>
                        {title}
                    </Text>

                    <Image
                        style={{ height: 50, width: 50, borderRadius: 50 }}
                        source={{
                            uri: profile,
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <View style={styles.icons}>
                        <View
                            style={{
                                marginRight: 3,
                            }}>
                            <EvilIcons
                                name="location"
                                color={Colors.secondary}
                                size={15}
                            />
                        </View>
                        <Text style={styles.subs}>{location}</Text>
                    </View>
                    <View style={styles.icons}>
                        <View style={{ marginRight: 3 }}>
                            <FontAwesome5 name="calendar" color="#D9D9D9" />
                        </View>
                        <Text style={styles.subs}>
                            {date ? getFullDate(date) : "  "}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}>
                    <View
                        style={{
                            backgroundColor: "#4A73E8",
                            paddingVertical: 7,
                            paddingHorizontal: 12,
                            borderRadius: 15,
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontFamily: fonts.extrabold,
                                fontSize: 11,
                            }}>
                            {status.toUpperCase()}
                        </Text>
                    </View>
                    <Text
                        style={{
                            textAlignVertical: "bottom",
                            fontFamily: fonts.extrabold,
                            color: "green",
                            fontSize: 17,
                        }}>
                        ${price}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Task2;

const styles = StyleSheet.create({
    icons: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    subs: {
        color: "#898080",

        fontSize: 14,
        marginLeft: 3,
        fontFamily: fonts.extrabold,
    },
});
