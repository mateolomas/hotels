import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const hotel1 = require('../assets/image/hotel1.png');
const locationIcon = require('../assets/icons/location.png');

import { hotels } from '../const/hotels';

const Card = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.text1}>Our properties</Text>
                    <Text style={styles.orangeText}>View all</Text>
                </View>
            </View>

            <ScrollView horizontal={true} style={styles.card_container}>
                {hotels.map((hotel, index) => {
                    return (
                        <View style={styles.card} key={index}>
                            <Image source={hotel1} style={styles.imageHotel} />
                            <View style={styles.textCard}>
                                <Text style={styles.text1}>{hotel.name}</Text>
                                <View style={styles.location}>
                                    <View style={styles.location2}>
                                        <Image source={locationIcon} style={styles.locationIcon} />
                                        <Text style={styles.text2}>{hotel.location}</Text>
                                    </View>


                                    <TouchableOpacity style={styles.button} >
                                        <Text style={styles.gt}>&gt;</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 305,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        alignItems: 'center',
        marginTop: 10,
    },
    card_container: {
        flexDirection: 'row',
    },
    card: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderRadius: 26,
        marginTop: 20,
        width: 280,
    },
    imageHotel: {
        marginTop: 15,
        width: '100%',
        height: '70%',
        borderRadius: 30,
    },
    textContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textCard: {
        height: 50,
        flex: 1,
        marginLeft: 24,
    },
    text1: {
        fontSize: 18,
    },
    text2: {
        fontSize: 14,
        fontWeight: '100',
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    location2: {
        flexDirection: 'row',
    },
    locationIcon: {
        width: 14,
        height: 14,
        marginRight: 5,
    },

    orangeText: {
        color: '#F05A22',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#F05A22',
        width: 30,
        marginTop: -10,
        height: 30,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    gt: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        marginLeft: 8,
        marginTop: 2,

    }
});

export default Card;
