import Colors from "./Colors";

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const screenDefaultOptions = {
  animation: "slide_from_right",
  headerShadowVisible: false,
  headerStyle: { backgroundColor: Colors.background },
  headerTitle: "",
};
