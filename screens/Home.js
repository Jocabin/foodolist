import React from "react";
import { StyleSheet, View } from "react-native";
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
