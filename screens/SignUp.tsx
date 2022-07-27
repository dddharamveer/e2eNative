import { View,Text, StyleSheet } from "react-native"
import{ LinearGradient }from "expo-linear-gradient"
import Auth from "../components/auth"


const SignUp=()=>{
    return(
    <View style={styles.container}>
   
        <Auth/>
        <View style={styles.terms}>
          <Text style={styles.subTitle}>
            By signin up, I agree to Tasker’s{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Terms & Conditions
            </Text>
            , & Community Guildelines. Privacy Policy.
          </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white',
}
})
export default SignUp