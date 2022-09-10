import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewRecipe from "../screens/NewRecipe";
import { StyleSheet, Text } from "react-native";
import Logo from "../components/Logo";
import TextButton from "../components/TextButton";
import { useNavigation } from "@react-navigation/native";
import { screenDefaultOptions } from "../constants/utils";

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
                  navigation.navigate("NewRecipe");
                }}
              >
                Nouvelle recette
              </TextButton>
            ),
          }}
        />
        <Stack.Screen
          name="NewRecipe"
          component={NewRecipe}
          options={{
            ...screenDefaultOptions,
            headerRight: () => (
              <TextButton
                click={() => {
                  alert("added");
                }}
              >
                Enregistrer la recette
              </TextButton>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default RootNavigator;
