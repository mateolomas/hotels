import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const userIcon = require("../assets/icons/user_icon.png")


const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={userIcon} />
            <Text>Hello, Niara!</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: 100,

        marginHorizontal: 25,
    },
    image: {
        width: 45,
        height: 45,
        marginHorizontal: 15,


    }

})

export default Header