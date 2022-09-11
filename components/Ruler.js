import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";

function Ruler() {
  return (
    <View
      style={{
        borderBottomColor: Colors.text,
        borderBottomWidth: 1,
        marginVertical: 32,
      }}
    />
  );
}

export default Ruler;
