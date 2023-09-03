import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, FlatList, Dimensions } from 'react-native';
import { RF } from '../constants/responsive';
import { WEEKS_DATA,STOCK_DATA,TIMINGS_DATA,GRAPH_DATA  } from '../constants/constants';
import AlarmModal from '../components/AlarmModal';

const ProfileScreen = ({ route }) => {
    const [selectedDay, setSelectDay] = useState("Label 1");
    const [selectedPrice, setSelectedPrice] = useState(null); // Add state for the selected price
    const { stock } = route.params;
    const stockData = stock;
    const originalPrice = stock.price;
    const originalPercentage = stock.percentageChange;
    
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
   
    const range = 5;
    const inBetweenItem = STOCK_DATA.find(item => {
        const lowerBound = item.value - range;
        const upperBound = item.value + range;
        return selectedPrice !== null && selectedPrice >= lowerBound && selectedPrice <= upperBound;
    });

    const inBetweenPriceValue = inBetweenItem ? inBetweenItem.value : 0;

 
    const renderWeekItem = ({ item }) => {
        const color = selectedDay === item.label ? "#FFFFFF" : "#43464D";
        return (
            <TouchableOpacity key={item.label} onPress={() => setSelectDay(item.label)} style={styles.weekCntr}>
                <Text style={[styles.weekText, { color: color }]}>{item.day}</Text>
            </TouchableOpacity>
        );
    };


    const renderItem = ({ item }) => (
        <View key={item.id} style={[styles.imageContainer, item.style]}>
            <Image source={item.imageUrl} style={[styles.image, item.style]} />
        </View>
    );

    const SelectedBarInfo = () => {
        return (
            <View style={styles.selectedBarInfo}>
                <View>
                    <Text style={[styles.selectedBarPrice, { fontSize: RF(32) }]}>
                        {selectedPrice !== null ? selectedPrice.toFixed(2) : originalPrice.toFixed(2)} $
                    </Text>
                    <Text style={styles.selectedSub}>NASDAQ</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/Images/down.png')}
                        style={{ width: 8, height: 8, resizeMode: 'contain', marginHorizontal: 7 }} />
                    <Text style={[styles.selectedBarText, { fontSize: RF(24) }]}>{originalPercentage} %</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <SelectedBarInfo />
            <View style={styles.chart}>
                <FlatList
                    data={GRAPH_DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
                <View style={{ marginTop: RF(40) }}>
                    {STOCK_DATA.map((item) => {
                        const formattedPrice = item.value.toFixed(2);
                        const priceStyle = {
                            color: selectedPrice !== null && selectedPrice >= 0 && selectedPrice <= 160 ? '#FFFFFF' : '#FF3165',
                            fontSize: RF(12),
                        };
                        return (
                            <TouchableOpacity
                                key={item.label}
                                style={styles.priceCtnr}
                                onPress={() => setSelectedPrice(item.value)} // Handle selection
                            >
                                <Text style={[styles.priceText, priceStyle]}>{formattedPrice}</Text>
                                {item.value === inBetweenPriceValue && (
                                    <TouchableOpacity style={styles.inBetweenPrices}>
                                        <Image source={require('../assets/Images/leftindi.png')}
                                            style={{ width: 6, height: 6, resizeMode: 'contain' }} />
                                        <Text style={[styles.inBetweenPriceValue, { fontSize: RF(12) }]}>
                                            {selectedPrice !== null ? selectedPrice.toFixed(2) : originalPrice.toFixed(2)} $
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft: RF(10) }}>
                {TIMINGS_DATA.map((item) => {
                    return (
                        <View key={item.label} style={styles.timeCntr}>
                            <Text style={[styles.timeText, { fontSize: RF(12) }]}>{item.time}</Text>
                            <Text style={[styles.totalTime, { fontSize: RF(12) }]}>{item.totalTime}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{
                flexDirection: 'row', paddingTop: RF(30), paddingHorizontal: RF(8),
                alignItems: 'center'
            }}>
                <FlatList
                    data={WEEKS_DATA}
                    renderItem={renderWeekItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <TouchableOpacity style={{
                    marginRight: RF(12)
                }}>
                    <Image source={require('../assets/Images/btngraph.png')}
                        style={[styles.weekImg]} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.btnStyle}>
                <Text style={[styles.buyText, { fontSize: RF(16) }]}>Buy</Text>
            </TouchableOpacity>
            <AlarmModal isVisible={isModalVisible} onClose={toggleModal} stock={stockData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16171C',
    },
    chart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        marginTop: RF(50),
    },
    image: {
        padding: 0,
    },
    selectedBarInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: RF(16),
        padding: RF(15),
    },
    selectedBarPrice: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#FFFFFF',
        letterSpacing: 0.13,
    },
    selectedBarText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#78CBBB',
        textAlign: 'right',
        letterSpacing: 0.1,
    },
    selectedSub: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#487FD9',
        letterSpacing: 0.06,
    },
    priceCtnr: {
        padding: RF(10),
        marginRight: RF(10),
    },
    priceText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        letterSpacing: 0.06,
    },
    timeCntr: {
        flexDirection: 'row',
        paddingHorizontal: RF(8),
    },
    timeText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        letterSpacing: 0.06,
        color:'#FFFFFF'
    },
    totalTime: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#78CBBB',
        letterSpacing: 0.06,
    },
    weekCntr: {
        paddingHorizontal: RF(14),
    },
    weekText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        letterSpacing: 0.06,
    },
    weekImg: {
        width: RF(32),
        height: RF(32),
        padding: 0,
        resizeMode: 'contain',
    },
    btnStyle: {
        width: RF(343),
        height: RF(48),
        backgroundColor: '#487FD9',
        borderRadius: RF(4),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RF(50),
    },
    buyText: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 0.06,
    },

    inBetweenPrices: {
        flexDirection: 'row', // Display the label and value vertically
        alignItems: 'center',
        marginTop: RF(4),
    },

    inBetweenPriceValue: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#78CBBB',
        letterSpacing: 0.06,
    },
});

export default ProfileScreen;
