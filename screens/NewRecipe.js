import React from "react";
import { View, Text } from "react-native";
import { database } from "../core/Config";
import { ref, set } from "firebase/database";
import PrimaryBtn from "../components/PrimaryBtn";
import { random } from "../constants/utils";

function NewRecipe() {
  function addRecipe() {
    set(ref(database, "recipes/" + random(0, 20)), {
      id: Date.now(),
      title: "Salade",
      ingredients: ["Tomates", "Concombres"],
      tags: ["Froid", "Lait"],
    })
      .then(() => {
        alert("added");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <View>
      <Text>Recipe</Text>
      <PrimaryBtn click={addRecipe}>Add</PrimaryBtn>
    </View>
  );
}

export default NewRecipe;
