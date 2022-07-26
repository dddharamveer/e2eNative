import { View, TextInput, StyleSheet, Text } from "react-native";

const TextInputUi = ({
  name,
  password,
  onChangeText,
}: {
  name: string;
  password?: boolean;
  onChangeText?: any;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={password}
        placeholder={name}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputUi;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    elevation: 6,
  },
  input: {
    backgroundColor: "white",
    minHeight: 60,
    elevation: 6,

    borderRadius: 4,
    padding: 10,
  },
});
