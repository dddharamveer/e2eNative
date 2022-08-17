import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../constants/firebase/firebase";
import { AuthContext } from "../../store/authContext";
import Button2 from "../../components/ui/Button-2";
import {
  collection,
  getFirestore,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { fonts } from "../../constants/fonts";
import TextInputWithLabel from "../../components/ui/TextInputWithLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingComponent from "../../components/ui/LoadingComponent";
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const UploadProfile = ({ navigation }) => {
  const ctx = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = React.useState();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const usersRef = ref(
    storage,
    `users/${ctx.user.uid}/publicData/ProfileImage`,
  );

  const pick = async () => {
    const uploadImage = async (uri: any) => {
      const response = await fetch(uri);
      const blob = await response.blob();
      setLoading(true);
      uploadBytes(usersRef, blob)
        .then((snap) => {
          return getDownloadURL(snap.ref);
        })
        .then((downloadUrl: string) => {
          setImage(downloadUrl);
          ctx.changeUserData({ profilePic: downloadUrl });
          return setDoc(
            doc(db, "users", ctx.user.uid),
            {
              profilePic: downloadUrl,
            },
            { merge: true },
          );
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      await uploadImage(result.uri);
    }
  };
  console.log(ctx.user.uid);

  if (loading) {
    return <LoadingComponent />;
  }
  const [name, setname] = useState("");
  const another = doc(db, "users", ctx.user.uid);
  const save = async () => {
    try {
      const senddata = await setDoc(another, { Name: name }, { merge: true });
      console.log(senddata);

      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={{ margin: 30, flex: 1 }}>
      <Pressable
        onPress={pick}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          alignSelf: "center",
        }}>
        <Image
          source={
            ctx.userData
              ? { uri: ctx.userData.profilePic }
              : require("./1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg")
          }
          style={{ width: 95, height: 95, borderRadius: 50 }}
        />
      </Pressable>
      <TextInputWithLabel
        onChangeText={(text) => {
          setname(text);
        }}>
        Name
      </TextInputWithLabel>
      <Button2
        iconName="save"
        onPress={save}
        iconColor="white"
        backgroundColor="black">
        Save
      </Button2>
    </SafeAreaView>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({});
