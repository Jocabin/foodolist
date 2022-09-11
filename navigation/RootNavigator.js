import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import EditRecipe from "../screens/EditRecipe";
import ViewRecipe from "../screens/ViewRecipe";
import { StyleSheet, Text } from "react-native";
import Logo from "../components/Logo";
import TextButton from "../components/TextButton";
import { useNavigation } from "@react-navigation/native";
import { addRecipe, screenDefaultOptions } from "../constants/utils";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...screenDefaultOptions,
            headerTitle: () => <Logo />,
            headerRight: () => (
              <TextButton
                click={() => {
                  navigation.navigate("EditRecipe");
                }}
              >
                Nouvelle recette
              </TextButton>
            ),
          }}
        />
        <Stack.Screen
          name="EditRecipe"
          component={EditRecipe}
          options={{
            ...screenDefaultOptions,
            headerRight: () => (
              <TextButton
                click={() => {
                  addRecipe();
                }}
              >
                Enregistrer la recette
              </TextButton>
            ),
          }}
        />
        <Stack.Screen
          name="ViewRecipe"
          component={ViewRecipe}
          options={{
            ...screenDefaultOptions,
            headerRight: () => (
              <TextButton
                click={() => {
                  alert("modified");
                }}
              >
                Modifier la recette
              </TextButton>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
