import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  RefreshControl,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { mergeData } from "../../constants/firebase/auth";
import { AuthContext } from "../../store/authContext";
import TextInputUi from "../../components/ui/TextInput";
import { fonts } from "../../constants/fonts";
import ButtonUi from "../../components/ui/ButtonsUi";

const UserInput = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const ctx = useContext(AuthContext);
  const sub = () => {
    mergeData(ctx.user?.uid, { name });
    navigation.navigate("TabsNavigation");
  };
  return (
    <SafeAreaView style={{ margin: 30 }}>
      <View style={{}}>
        <Text style={{ fontFamily: fonts.main, marginVertical: 10 }}>Name</Text>
        <TextInputUi
          name="Name"
          onChangeText={(name) => {
            setName(name);
          }}
        />
      </View>
      {/* <View style={{}}>
        <Text style={{ fontFamily: fonts.main, marginVertical: 10 }}>
          Location
        </Text>
        <TextInputUi
          name="Location"
          onChangeText={(name) => {
            setName(name);
          }}
        />
      </View>
      <View style={{}}>
        <Text style={{ fontFamily: fonts.main, marginVertical: 10 }}>
          Poster /Tasker
        </Text>
        <TextInputUi
          name="Poster /Tasker"
          onChangeText={(name) => {
            setName(name);
          }}
        />
      </View> */}
      <ButtonUi onPress={sub}>Get Started</ButtonUi>
    </SafeAreaView>
  );
};

export default UserInput;

const styles = StyleSheet.create({});
