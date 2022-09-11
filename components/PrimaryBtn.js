import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import Fonts from "../constants/Fonts";

function PrimaryBtn({ children, click }) {
  return (
    //  FIXME: shadow
    <Pressable onPress={click} style={[styles.button, GlobalStyles.shadow]}>
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
    fontWeight: Fonts.bold,
    fontSize: Fonts.textSize,
  },
});

export default PrimaryBtn;
