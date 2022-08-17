import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MessagesCard from '../../components/ui/MessagesCard'

var Notifications_messages: boolean = true

export default function Notifications() {
  const noMessages = <View style={styles.container}>
   <Text style={{fontSize:24}}>No Notifications to show yet!</Text>
  </View>
   
  if(!Notifications_messages){
    return noMessages 
   }
  return (
            // <View style={styles.container}>
            // <Text>these notifications</Text>
            // </View>
            <ScrollView>

            <View style={{flex:1,}}>
              <MessagesCard/>
              <MessagesCard/>
              <MessagesCard/>
              <MessagesCard/>
              <MessagesCard/>
              <MessagesCard/>
              <MessagesCard/>
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