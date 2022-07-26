import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonUi = ({ color, fill, children, onPress }) => {

    return <Pressable onPress={onPress} style={[styles.Button, fill ? { backgroundColor: { color } } : { borderWidth: 2, borderColor: { color } }]}>
        <View >
            <Text style={styles.text}>{children}</Text>
        </View>
    </Pressable>

}


export default ButtonUi;

const styles = StyleSheet.create({

    Button: {

        width: "100%",
        height: '100%',

        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'

    }
    ,
    text: {
        fontSize: 15,
        color: 'white'
    }
})