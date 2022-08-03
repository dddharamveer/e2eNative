import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/rubik";
import { rubik } from "./constants/fonts";

import AuthProvider from "./store/authContext";

export default function App() {
    let [fontsLoaded] = useFonts(rubik);

    if (!fontsLoaded) {
        return <Text>dsaf</Text>;
    }

    return (
        <>
            <StatusBar style="light" />
            <AuthProvider>
                <View style={styles.container}></View>
            </AuthProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
