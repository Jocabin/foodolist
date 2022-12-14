import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import GlobalStyles from "../constants/GlobalStyles";
import PrimaryBtn from "../components/PrimaryBtn";
import Ruler from "../components/Ruler";

function ViewRecipe() {
  const route = useRoute();

  return (
    <View style={[GlobalStyles.homePage, { padding: 24 }]}>
      <ScrollView style={styles.scroll}>
        <View style={styles.recipeCard}>
          <Text numberOfLines={2} style={GlobalStyles.title}>
            {route.params.title}
          </Text>

          {route.params.tags.map((tag, index) => {
            return (
              <Text key={index} numberOfLines={1} style={GlobalStyles.text}>
                {tag}
              </Text>
            );
          })}

          <Ruler />

          <Text numberOfLines={1} style={GlobalStyles.title}>
            Ingrédients
          </Text>

          {route.params.ingredients.map((ingredient, index) => {
            return (
              <Text key={index} numberOfLines={1} style={GlobalStyles.text}>
                {ingredient}
              </Text>
            );
          })}
        </View>
      </ScrollView>

      <PrimaryBtn>Voir une recette similaire</PrimaryBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeCard: {
    padding: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    overflow: "hidden",
  },
  scroll: {
    flex: 1,
    marginBottom: 88,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },
});

export default ViewRecipe;
