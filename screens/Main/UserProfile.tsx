import { Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../store/authContext";
import Button2 from "../../components/UI/Button-2";
import { setDoc, doc } from "firebase/firestore";

import TextInputWithLabel from "../../components/TextInputWithLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "../../components/UI/LoadingScreen";
import { db, storage } from "../../Firebase/firebaseConfig";
import { MainStackScreenProps } from "../../types";

const UserProfile = ({ navigation }: MainStackScreenProps<"Profile">) => {
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
        .then((downloadUrl: any) => {
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

  const [name, setname] = useState("");
  const another = doc(db, "users", ctx.user.uid);
  const save = async () => {
    try {
      const senddata = await setDoc(another, { Name: name }, { merge: true });
      console.log(senddata);
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return <LoadingScreen />;
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
        }}
      >
        <Image
          source={
            ctx.userData
              ? { uri: ctx.userData.profilePic }
              : {
                  uri: "https://images.unsplash.com/photo-1472847720459-21ede812f22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
                }
          }
          style={{ width: 95, height: 95, borderRadius: 50 }}
        />
      </Pressable>
      <TextInputWithLabel
        onChangeText={(text) => {
          setname(text);
        }}
      >
        Name
      </TextInputWithLabel>
      <Button2
        iconName="save"
        onPress={save}
        iconColor="white"
        backgroundColor="black"
      >
        Save
      </Button2>
    </SafeAreaView>
  );
};

export default UserProfile;
