import React from "react";
import { Text, View } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { useRoute } from "@react-navigation/native";
import GlobalStyles from "../constants/GlobalStyles";

function ViewRecipe() {
  const route = useRoute();
  return (
    <View style={GlobalStyles.homePage}>
      <View></View>

      <PrimaryBtn>Voir une recette similaire</PrimaryBtn>
    </View>
  );
}

export default ViewRecipe;
