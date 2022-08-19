import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React, { FC } from 'react'

type MessagesCard={
  openChat?: ()=> void;
}

const MessagesCard: React.FC<MessagesCard> = ({openChat}) => {
  return (
      <Pressable
        onPress={openChat}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
        ]} 
      >
        <Image
        style={styles.profileImg}
        source={{
          uri: 'https://p.kindpng.com/picc/s/99-997900_headshot-silhouette-person-placeholder-hd-png-download.png',
        }}
        />

        <Text style={{flex:1, flexWrap:"wrap", marginLeft:20, marginRight:10}}>
            <Text style={{fontWeight:"700"}}>Jasdeep kaur</Text> commented on <Text style={{fontWeight:"700"}}>'Move pot plants to new house'</Text>
        </Text>
        <Text style={{alignSelf:"flex-end",color:"grey"}}> 
        10 mins 
        </Text>
      </Pressable>
  )
}

export default MessagesCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent:"center",
        alignItems:"center",
        // alignContent:'flex-start'
        // flexWrap:"wrap"
    },
    profileImg:{
        width:50,
        height:50,
        borderRadius:50/2,
    },
    pressed:{
      backgroundColor:"grey",
      opacity:0.7
    }

})