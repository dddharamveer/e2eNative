import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import MessagesCard from '../../components/ui/MessagesCard'

var Notifications_messages: boolean = true


export default function Notifications({navigation}:{navigation:any}) {
  const noMessages = <View style={styles.container}>
   <Text style={{fontSize:24}}>No Notifications to show yet!</Text>
  </View>
   
  if(!Notifications_messages){
    return noMessages 
   }
  return (
            <ScrollView>

            <View style={{flex:1,}}>
              <MessagesCard
                openChat={()=>{
                  navigation.navigate('Chat')
                }}
              />
            </View>
            </ScrollView>
            )
            
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
)