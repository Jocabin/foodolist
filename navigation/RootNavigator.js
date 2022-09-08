import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewRecipe from "../screens/NewRecipe";
import { StyleSheet, Text } from "react-native";
import Logo from "../components/Logo";
import Colors from "../constants/Colors";
import TextButton from "../components/TextButton";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();

  const screenDefaultOptions = {
    animation: "slide_from_right",
    headerShadowVisible: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...screenDefaultOptions,
            headerStyle: styles.header,
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
          options={{ ...screenDefaultOptions }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.background,
  },
});

export default RootNavigator;
