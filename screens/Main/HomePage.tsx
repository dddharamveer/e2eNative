import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import SortDropdown from "../../components/ui/SortDropdown";

import IconButton from "../../components/ui/IconButton";
import { FontAwesome5 } from "@expo/vector-icons";
import BrowseTasks from "../../components/BrowseTasks";

const HomePage = () => {
    const width1 = Dimensions.get("window").width;
    console.log(width1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <SortDropdown />
                    <SortDropdown />
                    <SortDropdown />
                </ScrollView>
            </View>
            <View style={styles.body}>
                <BrowseTasks />
            </View>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: { flex: 1 },
    header: { marginLeft: 20 },
});
