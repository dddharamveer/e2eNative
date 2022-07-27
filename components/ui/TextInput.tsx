import { View, TextInput, StyleSheet, Text } from "react-native"

const TextInputUi = ({name}) => {
    return <View style={styles.container}>
     
        <TextInput placeholder={name} style={styles.input} />
    </View>
}


export default TextInputUi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:5,
        elevation:6
        
    },
    input: {

        backgroundColor: 'white',
        minHeight: 60
        ,
        elevation:6,
        borderWidth:2,
        borderColor:'black',
        borderRadius: 4
        ,padding:10
    }
})