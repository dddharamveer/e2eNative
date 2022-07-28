import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Auth from "../components/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = () => {
    const screenHeight = Dimensions.get("screen").height;
    const windowHeight = Dimensions.get("window").height;
    const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight!;
    console.log(navbarHeight * 2);
    return (
        <KeyboardAwareScrollView
            scrollEnabled={false}
            styles={styles.container}
            contentContainerStyle={{
                height: windowHeight - navbarHeight + 30,
                backgroundColor: "white",
            }}>
            <Auth type="Sign Up" size={3} />
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
});
export default SignUp;
