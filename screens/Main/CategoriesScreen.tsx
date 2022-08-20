import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainTabScreenProps } from "../../types";
import Colors from "../../constants/Colors";

const CustomButtonIcon = "plus";

const categoriesList = [
  {
    label: "Cleaning",
    mname: "broom",
  },
  {
    label: "Movers and Packers",
    mname: "truck-delivery",
  },
  {
    label: "Delivery",
    mname: "cube-send",
  },
  {
    label: "Gardening",
    mname: "grass",
  },
  {
    label: "Event and Photography",
    mname: "cake-variant",
  },
  {
    label: "Assembly",
    mname: "tools",
  },
  {
    label: "Business",
    mname: "briefcase",
  },
  {
    label: "Technical Assistance",
    mname: "desktop-mac",
  },
  {
    label: "Appliance",
    mname: "washing-machine",
  },
];

type CategoriesButton = {
  mname?: any;
  color?: string;
  size?: number;
  iconColor?: string;
  label?: string;
  onPress?: () => void;
};
const CategoriesButton: React.FC<CategoriesButton> = ({
  mname,
  color,
  size,
  iconColor,
  onPress,
  label,
}) => {
  return (
    <View style={styless.main}>
      {mname && (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styless.container,
            pressed && styless.pressed,
          ]}
        >
          <MaterialCommunityIcons name={mname} size={size} color={iconColor} />
        </Pressable>
      )}
      {label && (
        <Text
          style={{
            textAlign: "center",
            marginVertical: 5,
          }}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

export default CategoriesButton;
const width = 100 / 3;
const styless = StyleSheet.create({
  main: {
    width: `${width}%`,
    marginVertical: 15,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});

export const CategoriesScreen = ({
  navigation,
}: MainTabScreenProps<"CategoriesScreen">) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "white",
          marginVertical: 15,
        }}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width: 280, paddingVertical: 15, paddingLeft: 10 }}>
          <Image
            style={{
              width: "100%",
              height: 180,
              borderRadius: 10,
              padding: 30,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
            }}
          />
        </View>
        <View style={{ width: 280, padding: 15 }}>
          <Image
            style={{
              width: "100%",
              height: 180,
              borderRadius: 10,
              padding: 30,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1657664066011-ed54a1be81d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            }}
          />
        </View>
        <View style={{ width: 280, padding: 15 }}>
          <Image
            style={{
              width: "100%",
              height: 180,
              borderRadius: 10,
              padding: 30,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 25,
          marginBottom: 5,
        }}
      >
        <MaterialCommunityIcons
          name="pencil-box"
          size={32}
          color={Colors.light.background}
        />
        <Text style={{ fontSize: 18, marginLeft: 10 }}>
          Post a task & get offers
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: 25,
          marginBottom: 20,
        }}
      >
        Receive & review offers from Taskers who can help
      </Text>

      {categoriesList.map((item) => {
        return (
          <CategoriesButton
            onPress={() => {
              navigation.navigate("CreateTask");
            }}
            iconColor="white"
            size={24}
            key={item.mname}
            mname={item.mname}
            label={item.label}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  wrap: {
    maxHeight: "50%",
  },
  containerInner: {
    margin: 20,
    flexWrap: "wrap",

    justifyContent: "space-between",
    alignContent: "stretch",
  },

  headerText: {
    justifyContent: "center",

    fontSize: 30,
  },
  subText: {
    marginTop: 5,
    maxWidth: 100,
    textAlign: "center",
  },
  categories: {
    marginHorizontal: 20,
    marginVertical: 1,
  },

  customCategory: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  horizontalRule: {
    borderTopWidth: 3,

    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },
});
