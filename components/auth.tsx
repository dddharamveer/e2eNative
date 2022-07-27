import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView, Pressable } from "react-native"
import TextInputUi from "./ui/TextInput"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonUi from "./ui/ButtonsUi"
import ExterAuthIcons from "./ExternelAuth"
const Auth = () => {
    return (


        <KeyboardAwareScrollView behavior="padding" style={styles.container}    >
            <View style={styles.inner} >


                <View style={styles.title}>

                    <Text style={styles.titleText}>Lets go...</Text>
                </View>
                <Text style={styles.account}>Create a new account</Text>
                <View style={styles.inputs}>

                    <TextInputUi name="Email" />


                    <TextInputUi name="Password" />
                    <ButtonUi fill={true} backgroundColor="white">Sign up</ButtonUi>

                </View>
                <Pressable><Text>Forgot Password?</Text></Pressable>
                <ExterAuthIcons/>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 30,
    },
    account: {
        marginTop: 70,
        color: 'black',
        textAlign: 'center',
    },
    title: {
        marginVertical: "10%",
    },
    titleText: {
        color: "black",
        fontSize: 24
    }
})

export default Auth;