import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PrimaryBtn({ children }) {
  return (
    <Pressable style={styles.primaryButton} title={"test button"}>
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 24,
    width: "100%",
  },
  primaryButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default PrimaryBtn;
