import React from "react";
import Logo from "../components/Logo";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryBtn from "../components/PrimaryBtn";

function Home() {
  const navigation = useNavigation();

  function nav() {
    navigation.navigate("NewRecipe");
  }

  return (
    <View style={styles.homePage}>
      <Logo />
      <PrimaryBtn click={nav}>Test</PrimaryBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: "red",
  },
});

export default Home;
