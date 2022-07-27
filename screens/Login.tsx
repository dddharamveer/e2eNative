import { View,Text, StyleSheet,Dimensions,StatusBar } from "react-native"
import{ LinearGradient }from "expo-linear-gradient"
import Auth from "../components/auth"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Login=()=>{
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;
  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;
console.log(navbarHeight);  
    return (
      <KeyboardAwareScrollView
        behavior="padding"
        contentContainerStyle={{ height: windowHeight - navbarHeight * 2 }}>
        <Auth type="Log in"/>
      </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white',
}
})
export default Login;