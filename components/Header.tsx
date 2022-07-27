import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View ,Button} from "react-native"
import IconButton from "./ui/IconButton"

export const BackButton = () => {
const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return <View style={styles.container}>
 
 <IconButton name="arrow-back-outline" size={24} color="black" onPress={goBack} iconColor="white"/>

    </View>
}

const styles = StyleSheet.create({
    container:{
        marginTop:"60%",
        marginBottom:"20%",
        marginLeft:10
  
    }
})
