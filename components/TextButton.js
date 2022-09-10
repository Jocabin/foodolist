import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function TextButton({ children, click }) {
  return (
    //TODO fontsize
    <Pressable style={styles.button} onPress={click}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
    fontWeight: "500",
  },
  button: {
    padding: 16,
    paddingRight: 0,
  },
});

export default TextButton;
