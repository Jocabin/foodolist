import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const GlobalStyles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.text,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 4,
    elevation: 2,
  },
});

export default GlobalStyles;
