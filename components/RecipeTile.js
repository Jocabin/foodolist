import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "./PrimaryBtn";
import GlobalStyles from "../constants/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

function RecipeTile({ recipe }) {
  const navigation = useNavigation();

  //  FIXME: shadow
  return (
    <View style={[styles.container]}>
      <View style={{ marginBottom: 48 }}>
        <Text numberOfLines={1} style={GlobalStyles.title}>
          {recipe.title}
        </Text>
        <Text numberOfLines={1} style={GlobalStyles.tags}>
          {recipe.tags.map((tag) => {
            return (tag === recipe.tags[0] ? "" : " - ") + tag;
          })}
        </Text>
      </View>
      <PrimaryBtn
        click={() => {
          navigation.navigate("ViewRecipe", {
            id: recipe.id,
            title: recipe.title,
            tags: recipe.tags,
            ingredients: recipe.ingredients,
          });
        }}
      >
        Voir la recette
      </PrimaryBtn>
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
    marginBottom: 48,
    borderRadius: 16,
    marginHorizontal: 24,
    overflow: "hidden",
  },
});

export default RecipeTile;
