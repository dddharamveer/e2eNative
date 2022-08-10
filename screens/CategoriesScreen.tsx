import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'
import SearchBar from '../components/ui/SearchBar';
import { Colors } from "../contents/Colors";
import { fonts } from "../contents/fonts";
import { MaterialIcons } from '@expo/vector-icons';
import CategoriesButton from '../components/ui/CategoriesButton';
import { categoriesList } from '../contents/categoriesList';

const CustomButtonIcon ="plus";

export const CategoriesScreen = () => {
  return (
    // <ScrollView>
    <View style={styles.container}>
        <View style={styles.header}>
            <SearchBar/>
        <Text style={{flexWrap:"wrap", textAlign:"center" }}>Choose from the categories below </Text>
        </View>
        <View style={styles.wrap}>
        <View style={styles.containerInner}>
            {categoriesList.map((item)=>( 
            <View style={styles.categories}>
                {/* @ts-ignore */}
                
                <CategoriesButton style={styles.categoryButton} mname={item.mname} color='white' size={30}/>
                <Text style={styles.subText}>{item.label}</Text>
            </View>))}
        </View>
        </View>
        {/* CUSTOM CATEGORY BUTTON */}
        <View style={styles.horizontalRule}>
        </View>
        <Text style={{flexWrap:"wrap", textAlign:"center" }}>Create a custom task</Text>
        <View style={[styles.categories, styles.customCategory]}>
            <CategoriesButton mname={CustomButtonIcon} color='white' size={50} iconColor=""/>
            <Text style={styles.subText}>Everything Else</Text>
        </View>
    </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center"
        // flexDirection: "column",
    },
    header: {
        alignItems: "center",

    },
    wrap:{
        maxHeight: "50%",
    },
    containerInner: {
        margin: 20,
        flexWrap:"wrap",
        // flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "stretch"

        
    },

    headerText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
    },
    subText: {
        marginTop: 5,
        maxWidth: 100,
        textAlign:'center'
     

    },
    categories: {
        marginHorizontal: 20,
        marginVertical: 1,
        // justifyContent: "center",
        alignItems: "center",

        // flex: 2,
       
        
        // flexWrap: "wrap"
        // flexDirection: "row"
    },
    categoryButton: {
        // alignSelf: "center",
        // justifyContent:'center'


    },
    customCategory: {
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 20
    },
    horizontalRule: {
        borderTopWidth: 3,
        // flexWrap: "nowrap",
        width: "90%",
        alignSelf: "center",
        marginVertical: 20,

    }
    

})