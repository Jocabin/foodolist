import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "./PrimaryBtn";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";

function RecipeTile({ id, title, tags, click }) {
  return (
    //  FIXME: shadow
    <View style={[styles.container, GlobalStyles.shadow]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{tags}</Text>
      </View>
      <PrimaryBtn click={click}>Voir la recette</PrimaryBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 32,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 24,
    borderRadius: 16,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    color: Colors.text,
  },
});

export default RecipeTile;
