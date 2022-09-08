import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewRecipe from "../screens/NewRecipe";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewRecipe" component={NewRecipe} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
