import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PrimaryBtn({ children, click }) {
  return (
    <Pressable onPress={click} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 24,
    width: "100%",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default PrimaryBtn;
