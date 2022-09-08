import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function TextButton({ children, click }) {
  return (
    <Pressable style={styles.button} onPress={click}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
  },
  button: {},
});

export default TextButton;
