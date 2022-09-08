import React from "react";
import { View, Text } from "react-native";
import { database } from "../core/Config";
import { doc, setDoc } from "firebase/firestore";
import PrimaryBtn from "../components/PrimaryBtn";

function NewRecipe() {
  function addRecipe() {
    const document = doc(database, "recipes", "testdoc");
    const documentData = {
      title: "Salade",
      ingredients: ["Tomates", "Sel"],
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
