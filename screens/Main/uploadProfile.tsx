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
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const UploadProfile = () => {
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
          return setDoc(
            doc(db, "users", ctx.user.uid),
            {
              profilePic: downloadUrl,
            },
            { merge: true },
          );
        })
        .then((res) => {
          setLoading(false);
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
    return <ActivityIndicator size="large" />;
  }
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
            !!image
              ? { uri: image }
              : require("./1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg")
          }
          style={{ width: 95, height: 95, borderRadius: 50 }}
        />
      </Pressable>
      <TextInputWithLabel>Name</TextInputWithLabel>
      <Button2 iconName="save" iconColor="white" backgroundColor="black">
        Save
      </Button2>
    </SafeAreaView>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({});
