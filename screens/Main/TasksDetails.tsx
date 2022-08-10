import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import IconButton from "../../components/ui/IconButton";
import { fonts } from "../../constants/fonts";
import { Colors } from "../../constants/Colors";
const TasksDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <IconButton
          name="angle-left"
          size={20}
          iconColor="white"
          color={Colors.secondary}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          name="search"
          size={20}
          iconColor="white"
          color={Colors.secondary}
        />
      </SafeAreaView>
      <View style={styles.image}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://images.unsplash.com/photo-1509418969973-c560ee8f02a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNTYwNDE5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=60",
          }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <View>
          <Text style={{ fontFamily: fonts.bold, fontSize: 40 }}>Fix this</Text>
          <View style={{ flexDirection: "row", marginVertical: 6 }}>
            <FontAwesome5 name="map-marker-alt" size={15} />
            <Text
              style={{
                fontFamily: fonts.main,
                fontSize: 15,
                color: Colors.Primary,
                marginHorizontal: 5,
              }}>
              Location
            </Text>
          </View>
        </View>
        <View style={styles.badge}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#4a3f7b",
                height: 30,
                width: 30,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}>
              <FontAwesome5 name="book-open" size={15} color="white" />
            </View>
            <Text>Open till 8.30pm</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#4a3f7b",
                height: 30,
                width: 30,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}>
              <FontAwesome5 name="star" size={15} color="white" />
            </View>
            <Text>4.4</Text>
          </View>
          {/* <FontAwesome5 name="star" size={30} color="green" />
          <FontAwesome5 name="globe-americas" size={30} color="green" /> */}
        </View>

        <ScrollView style={{}}>
          <Text
            style={{
              fontFamily: fonts.bold,
              fontSize: 25,
              marginVertical: 15,
            }}>
            Offers
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: Colors.secondary,
              elevation: 5,
              backgroundColor: "white",
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: Colors.secondary,
              }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                }}
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontFamily: fonts.main, fontSize: 20 }}>$100</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: Colors.secondary,
              elevation: 5,
              backgroundColor: "white",
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: Colors.secondary,
              }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1606841216799-94d1952e4da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
                }}
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontFamily: fonts.main, fontSize: 20 }}>$100</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: Colors.secondary,
              elevation: 5,
              backgroundColor: "white",
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: Colors.secondary,
              }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1659475820627-42388f0f5388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                }}
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontFamily: fonts.main, fontSize: 20 }}>$100</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TasksDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  image: { height: "30%" },
  badge: { flexDirection: "row", justifyContent: "space-between" },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
  header: {
    width: "100%",
    zIndex: 1,
    position: "absolute",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
