import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";
import IconButton from "./components/ui/IconButton";
import { BackButton, Title } from "./components/Header";
import {
    useFonts,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";

const stack = createNativeStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black,
        Rubik_300Light_Italic,
        Rubik_400Regular_Italic,
        Rubik_500Medium_Italic,
        Rubik_600SemiBold_Italic,
        Rubik_700Bold_Italic,
        Rubik_800ExtraBold_Italic,
        Rubik_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <Text>dsaf</Text>;
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <NavigationContainer>
                    <stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: "#ffffff" },
                            headerShadowVisible: false,
                            headerBackVisible: false,
                            headerLeft: () => <BackButton />,
                            headerBackButtonMenuEnabled: false,
                        }}>
                        <stack.Screen
                            name="homePage"
                            component={HomePage}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={{ title: "" }}
                        />
                        <stack.Screen
                            name="LogIn"
                            component={Login}
                            options={{ title: "" }}
                        />
                    </stack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
