import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

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
    fontWeight: Fonts.bold,
    fontSize: Fonts.textSize,
  },
  button: {
    padding: 16,
    paddingRight: 0,
  },
});

export default TextButton;
