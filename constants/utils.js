import Colors from "./Colors";
import { database } from "../core/Config";
import { ref, set } from "firebase/database";

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const screenDefaultOptions = {
  animation: "slide_from_right",
  headerShadowVisible: false,
  headerStyle: { backgroundColor: Colors.background },
  headerTitle: "",
};

// CRUD functions
export function addRecipe() {
  set(ref(database, "recipes/" + random(0, 20)), {
    id: Date.now(),
    title: "Salade",
    ingredients: ["Tomates", "Concombres"],
    tags: [
      "Froid",
      "Lait",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
      "ddd",
    ],
  })
    .then(() => {
      alert("added");
    })
    .catch((error) => {
      alert(error);
    });
}
