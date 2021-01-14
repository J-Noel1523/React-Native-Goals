import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Testing() {
  return (
    <View style={styles.contain}>
      <View style={styles.textView}>
        <Text style={styles.everythingElse}>Welcome to Your Goals! 😀</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  everythingElse: {
    color: "#C0392B",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  contain: {
    alignItems: "center",
  },
  textView: {
    width: 300,
    marginBottom: 50,
  },
});
