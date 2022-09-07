import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PrimaryBtn from "./components/PrimaryBtn";
import Logo from "./components/Logo";
import Colors from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View style={styles.homePage}>
        <Logo />
      </View>
    </View>
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
