import React from "react";
import { View, Text } from "react-native";
import { database } from "../core/Config";
import { doc, setDoc } from "firebase/firestore";
import PrimaryBtn from "../components/PrimaryBtn";

function NewRecipe() {
  function addRecipe() {
    const document = doc(database, "recipes", "dddd");
    const documentData = {
      title: "Test",
      ingredients: ["dddddd", "d"],
    };

    setDoc(document, documentData)
      .then(() => {
        alert("added");
      })
      .catch((error) => {
        alert(error.message);
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
