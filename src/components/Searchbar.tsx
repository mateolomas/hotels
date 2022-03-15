import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Your Stay</Text>
            <View style={styles.barcontainer}>
                <View style={styles.bar}>
                    <TextInput style={styles.textInput} placeholder="Search here..." />
                </View>
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 24,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        marginHorizontal: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#F05A22',
        width: 44,
        height: 44,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,

    },
    bar: {
        width: 260,
        height: 45,
        marginLeft: 40,
        marginVertical: 10,


        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "white",


    },
    textInput: {
        marginLeft: 20,


    },
    barcontainer: {
        flexDirection: 'row',

    }
});
