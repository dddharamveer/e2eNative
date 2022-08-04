import { useEffect, useContext } from "react";
import { Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { signOut } from "firebase/auth/react-native";
import { auth } from "../constants/firebase/auth";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/Colors";
import BrowseTasks from "../components/BrowseTasks";
import { AuthContext } from "../store/authContext";

import Account from "../screens/Account";

import HeaderHome from "./HeaderHome";
import { fonts } from "../constants/fonts";
import ButtonUi from "../components/ui/ButtonsUi";
import HomePage from "../screens/Main/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../components/Header";
import { FontAwesome5, Octicons } from "@expo/vector-icons";
import MyTasks from "../screens/MyTasks";

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
            <FontAwesome5 name="plus" size={30} color={Colors.Primary} />
        </View>
    );
}
function AccountScreen() {
    const { logout } = useContext(AuthContext);
    const login = () => {
        signOut(auth)
            .then(() => {
                logout();
                console.log("done");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 30,
            }}>
            <View
                style={{ height: "50%", width: "100%", alignSelf: "flex-end" }}>
                <ButtonUi
                    color="transparent"
                    onPress={login}
                    fill
                    backgroundColor="white">
                    Sign Out
                </ButtonUi>
            </View>
        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "8%",
                    backgroundColor: Colors.secondary,
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome5
                                name="home"
                                size={size}
                                color={color}
                            />
                        );
                    },
                    header: () => {
                        return (
                            <SafeAreaView
                                style={{
                                    margin: 20,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <Text
                                    style={{
                                        fontFamily: fonts.bold,
                                        fontSize: 25,
                                    }}>
                                    Hi, Bharat Adya
                                </Text>
                                <Octicons
                                    name="bell-fill"
                                    size={30}
                                    color={Colors.secondary}
                                />
                            </SafeAreaView>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={MyTasks}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome5
                                name="comments"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Browse Tasks"
                component={BrowseTasks}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome5
                                name="search"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Categories"
                component={CategoryScreen}
                options={({ navigation }) => ({
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
                })}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={({ navigation }) => ({
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
                })}
            />
        </Tab.Navigator>
    );
}
