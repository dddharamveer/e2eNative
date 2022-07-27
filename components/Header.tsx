import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View ,Button,Text} from "react-native"
import IconButton from "./ui/IconButton"
import { Colors } from "../contents/Colors"
import Svg, {
    Use,
    Image,
    SvgAst,
  } from 'react-native-svg';
import SvgComponent from "../assets/moon";
export const BackButton = () => {
const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
      <View style={styles.container}>
        <IconButton
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={goBack}
          iconColor="white"
        />
      </View>
    );
}

export const Title=({children})=>{
return (
  <View>
  <View style={styles.logo}>
 
  </View>
    <Text style={styles.title}>{children}</Text>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: "60%",
    marginBottom: "20%",
    marginLeft: 10,
  },
  title: {
    
    fontSize: 20,
    color: Colors.secondary,
  },
});
