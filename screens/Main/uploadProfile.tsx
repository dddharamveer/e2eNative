import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useContext } from "react";
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
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const UploadProfile = () => {
  const ctx = useContext(AuthContext);
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
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      await uploadImage(result.uri);
    }
  };
  console.log(ctx.user.uid);

  return (
    <View style={{ margin: 30, flex: 1 }}>
      <Button2 backgroundColor="green" iconName="image" onPress={pick}>
        Pick Image
      </Button2>
      <Text>uploadProfile</Text>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
          borderWidth: 1,
        }}>
        {!!Image && (
          <Image
            source={{
              uri: image,
            }}
            style={{ width: 50, height: 50 }}
          />
        )}
      </View>
    </View>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({});
