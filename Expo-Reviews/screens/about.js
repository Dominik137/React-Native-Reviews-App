import React from "react";
import { View, Text, StyleSheet } from "react-native";

function About(){

    return(
        <View style={styles.container}>
            <Text>About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})

export default About