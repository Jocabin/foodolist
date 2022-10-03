import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import Fonts from "../constants/Fonts";

function PrimaryBtn({ children, click, disabled }) {
  return (
    <Pressable
      disabled={disabled}
      onPress={click}
      style={[
        styles.button,
        GlobalStyles.shadow,
        disabled ? { backgroundColor: Colors.disabled } : {},
      ]}
    >
      <Text
        numberOfLines={1}
        style={[styles.text, disabled ? { color: Colors.disabledText } : {}]}
      >
        {children}
      </Text>
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
    fontWeight: Fonts.bold,
    fontSize: Fonts.textSize,
  },
});

export default PrimaryBtn;
