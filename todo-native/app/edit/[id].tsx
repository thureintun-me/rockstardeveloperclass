import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const api = "http://192.168.100.249:8080/tasks";
const Edit = () => {
  const { id } = useLocalSearchParams();
  const [name, setName] = useState("");
  const add = () => {};

  useEffect(() => {
    (async () => {
      const res = await fetch(`${api}/${id}`);
      const resJson = await res.json();
      setName(resJson.name);
    })();
  }, [id]);

  async function update() {
    await fetch(`${api}/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
    router.push("/");
  }
  return (
    <View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Button title="update" onPress={update} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#559",
    padding: 20,
    paddingTop: 50,
    // paddingTop: 50,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  inputGroup: {
    margin: 20,
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#559",
    borderRadius: 5,
  },
  input: {
    flexGrow: 1,
    color: "#fff",
  },
});

export default Edit;
