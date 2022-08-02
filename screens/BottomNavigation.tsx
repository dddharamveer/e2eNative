import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/Colors";

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home!</Text>
        </View>
    );
}
function TasksScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Task!</Text>
        </View>
    );
}
function CategoryScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Categories!</Text>
        </View>
    );
}
function AccountScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Account!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function Haram({ navigation }: { navigation: any }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "8%",
                    backgroundColor: "#005555",
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <IconButton
                                name="home"
                                iconColor={color}
                                size={22}
                                color="transparent"
                                onPress={() => {
                                    navigation.navigate("Home");
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={TasksScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <IconButton
                                name="comments"
                                iconColor={color}
                                size={22}
                                color="transparent"
                                onPress={() => {
                                    navigation.navigate("Tasks");
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={TasksScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <IconButton
                                name="search"
                                iconColor={color}
                                size={22}
                                color="transparent"
                                onPress={() => {
                                    navigation.navigate("Search");
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <IconButton
                                name="calendar"
                                iconColor={color}
                                size={22}
                                color="transparent"
                                onPress={() => {
                                    navigation.navigate("Categories");
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <IconButton
                                name="user-circle"
                                iconColor={color}
                                size={22}
                                color="transparent"
                                onPress={() => {
                                    navigation.navigate("Account");
                                }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
