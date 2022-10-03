import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";

import Fonts from "../constants/Fonts";

function TextField({ label, placeholder, value, onValue }) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[GlobalStyles.shadow, { width: "100%", marginBottom: 32 }]}>
      <Text style={GlobalStyles.text}>{label}</Text>
      <TextInput
        multiline={false}
        keyboardType="default"
        style={[styles.input, focus ? styles.focused : {}]}
        placeholder={placeholder}
        autoComplete={"off"}
        cursorColor={Colors.accent}
        textAlign={"left"}
        value={value}
        onChangeText={onValue}
        selectionColor={Colors.accentLight}
        placeholderTextColor={Colors.disabledText}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: 0,
    borderWidth: 2,
    fontSize: Fonts.textSize,
    marginTop: 4,
    backgroundColor: Colors.disabled,
  },
  focused: {
    backgroundColor: "#fff",
  },
});

export default TextField;
