import React from "react";
import Logo from "../components/Logo";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../constants/Colors";

function Home() {
  return <View style={styles.homePage}></View>;
}

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Home;
