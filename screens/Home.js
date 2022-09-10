import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { database } from "../core/Config";
import { ref, child, get } from "firebase/database";
import RecipeTile from "../components/RecipeTile";
import GlobalStyles from "../constants/GlobalStyles";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    get(child(ref(database), "recipes/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let recipesDoc = [];

          snapshot.forEach((doc) => {
            recipesDoc = [...recipesDoc, doc.val()];
          });

          setRecipes(recipesDoc);
        }
      })
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <View style={GlobalStyles.homePage}>
      <SafeAreaView style={{ width: "100%" }}>
        <FlatList
          data={Object.keys(recipes)}
          renderItem={({ item }) => <RecipeTile recipe={recipes[item]} />}
          keyExtractor={(item) => recipes[item].id}
        />
      </SafeAreaView>
    </View>
  );
}

export default Home;
