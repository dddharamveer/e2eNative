import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainTabScreenProps } from "../../types";

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
    backgroundColor: "green",
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
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
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
        <MaterialCommunityIcons name="pencil-box" size={32} color="green" />
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
    </View>
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
