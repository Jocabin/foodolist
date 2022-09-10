import React, {useEffect, useState} from "react";
import {SafeAreaView, FlatList, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import {database} from "../core/Config";
import {ref, child, get} from "firebase/database";
import RecipeTile from "../components/RecipeTile";

function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    });

    function getRecipes() {
        get(child(ref(database), "recipes/"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let recipesDoc = [];

                    snapshot.forEach((doc) => {
                        recipesDoc = [...recipesDoc, doc.val()];
                    });

                    setRecipes(recipesDoc);
                }
            })
            .catch((error) => {
                alert(error);
            });
    }

    function renderRecipes({item}) {
        return (
            <RecipeTile
                id={recipes[item].id}
                title={recipes[item].title}
                tags={recipes[item].tags}
                click={}
            />
        );
    }

    return (
        <View style={styles.homePage}>
            <SafeAreaView style={styles.list}>
                <FlatList
                    data={Object.keys(recipes)}
                    renderItem={renderRecipes}
                    keyExtractor={(item) => recipes[item].id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    list: {
        width: "100%",
    },
});

export default Home;
