import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";
import Colors from "./constants/Colors";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  NavigationBar.setBackgroundColorAsync("#FFF4DB");

  return (
      <NavigationContainer style={styles.appContainer}>
        <StatusBar/>
        <RootNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  homePage: {
    backgroundColor: "red",
  },
});
