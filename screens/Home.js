import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { database } from "../core/Config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  });

  function getRecipes() {
    const collectionRef = collection(database, "recipes");

    getDocs(collectionRef)
      .then((snapshot) => {
        if (snapshot) {
          let recipesDocument = [];

          snapshot.forEach((doc) => {
            recipesDocument = [...recipesDocument, doc.data()];
          });

          setRecipes(recipesDocument);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function renderRecipes({ item }) {
    return <Text>{recipes[item].title}</Text>;
  }

  return (
    <View style={styles.homePage}>
      <FlatList data={Object.keys(recipes)} renderItem={renderRecipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Home;
