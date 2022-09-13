import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "./Fonts";

const GlobalStyles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 16,
    elevation: 2,
  },
  homePage: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
  },
  title: {
    fontWeight: Fonts.bold,
    fontSize: Fonts.titleSize,
    color: Colors.text,
    marginBottom: 16,
  },
  text: {
    fontSize: Fonts.textSize,
    color: Colors.text,
  },
  tags: {
    fontWeight: Fonts.bold,
    fontSize: Fonts.textSize,
    color: Colors.text,
  },
});

export default GlobalStyles;
