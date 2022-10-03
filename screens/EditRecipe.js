import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Text } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import TextField from "../components/TextField";
import { useRoute } from "@react-navigation/native";
import { tagsLabelList } from "../constants/utils";
import PrimaryBtn from "../components/PrimaryBtn";
import Tag from "../components/Tag";

function EditRecipe() {
  const route = useRoute();

  const routeParams = {
    title: route?.params?.title,
    tags: route?.params?.tags,
    ingredients: route?.params?.ingredients,
  };

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  return (
    <View style={[GlobalStyles.homePage, styles.editPage]}>
      <TextField
        label={"Titre de la recette"}
        placeholder={"Ex: Salade de fruits"}
        value={routeParams.title || title}
        onValue={setTitle}
      />

      <SafeAreaView style={{ width: "100%", marginBottom: 32 }}>
        <Text style={[GlobalStyles.text, { marginBottom: 4 }]}>Tags</Text>

        <FlatList
          data={tagsLabelList}
          renderItem={({ item }) => (
            <Tag active={routeParams?.tags?.includes(item)}>{item}</Tag>
          )}
          horizontal={true}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <TextField
        label={"Ingrédients"}
        placeholder={"Ex: Tomates"}
        value={ingredient}
        onValue={setIngredient}
      />

      <PrimaryBtn disabled={ingredient === ""}>
        Ajouter {ingredient ? `"${ingredient}"` : ""}
      </PrimaryBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  editPage: {
    padding: 24,
  },
});

export default EditRecipe;
