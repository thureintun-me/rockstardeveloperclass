import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} />
        <Button title="Add" />
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Item One</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Item Two</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Item Three</Text>
        </View>
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
  },
  itemText: {
    fontSize: 18,
  },
});

export default HomeScreen;
