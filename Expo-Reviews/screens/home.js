import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Home(){

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Home sScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 64
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
    }
})

export default Home