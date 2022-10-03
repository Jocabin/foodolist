import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/Colors";

function Tag({ children, active }) {
  return (
    <View
      style={[
        styles.tag,
        { backgroundColor: active ? Colors.accentLight : "#fff" },
      ]}
    >
      <Text
        style={[
          GlobalStyles.text,
          { color: active ? Colors.accent : Colors.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 16,
  },
});

export default Tag;
