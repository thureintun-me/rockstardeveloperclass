import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const api = "http://192.168.100.58:8080/tasks";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      const respData = await fetch(api);
      console.log("Res", respData);
      setData(await respData.json());
    })();
  }, []);

  async function add() {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: input }),
    });
    const item = await res.json();
    setData([...data, item]);
    setInput("");
  }

  const remove = (id: string) => () => {
    try {
      const res = fetch(`${api}/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggle = (id: string) => {
    fetch(`${api}/${id}/toggle`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
    });
    setData(
      data.map((item) => {
        if (item._id == id) item.done = !item.done;
        return item;
      })
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(val) => setInput(val)}
        />
        <Button title="Add" onPress={add} />
      </View>
      <View style={styles.list}>
        {data
          ?.filter((item) => !item.done)
          .map((item, index) => {
            return (
              <View style={styles.item} key={item._id}>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <TouchableOpacity onPress={() => toggle(item?._id)}>
                    <AntDesign name="checksquareo" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity>
                    <Link href={`/edit/${item._id}`}>
                      <Ionicons name="pencil" size={24} color="white" />
                    </Link>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={remove(item._id)}>
                    <Ionicons name="trash" size={24} color={"red"} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
      <View
        style={{
          //  width: "100%",
          backgroundColor: "black",
          marginVertical: 50,
          height: 1,
          marginHorizontal: 20,
        }}
      ></View>
      <View style={styles.list}>
        {data
          ?.filter((item) => item.done)
          .map((item, index) => {
            return (
              <View style={styles.item} key={item._id}>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <TouchableOpacity onPress={() => toggle(item?._id)}>
                    <AntDesign name="checksquare" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity>
                    <Link href={`/edit/${item._id}`}>
                      <Ionicons name="pencil" size={24} color="white" />
                    </Link>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={remove(item._id)}>
                    <Ionicons name="trash" size={24} color={"red"} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#f1f1f1",
  },
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
  list: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default HomeScreen;
