import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "./PrimaryBtn";

function RecipeTile({ id, title, tags }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <Text>{tags}</Text>
      </View>
      <PrimaryBtn>Voir la recette</PrimaryBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 32,
    flexDirection: "column",
  },
});

export default RecipeTile;
