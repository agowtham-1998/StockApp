import React, { useState } from 'react';
import { View,StatusBar, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const AlarmModal = ({ isVisible, onClose ,stock}) => {
    const [alarmTime, setAlarmTime] = useState('');
    const [repeatDays, setRepeatDays] = useState([]);
    const [text, setText] = useState('');

    const handleTextChange = (price) => {
        setText(price);
    };
    
    const name = stock?.name;
    const price = stock?.price;
    const percentageChange = stock?.percentageChange;

    return (
        <Modal isVisible={isVisible} style={{ width: "100%", alignSelf: 'center' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
            >
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.modalContainer}>
                        <View style={styles.titleHeader}>
                            <Text style={styles.modalTitle}>Set Alarm</Text>
                          <TouchableOpacity onPress={onClose}>  
                            <Image
                                source={require('../assets/Images/close.png')}
                                style={styles.image}
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerTwo}>
                            <View style={styles.arrowImgCtnr}>
                            <TouchableOpacity> 
                                <Image
                                    source={require('../assets/Images/downarr.png')}
                                    style={styles.arrowImg}
                                />
                               </TouchableOpacity>
                               <TouchableOpacity> 
                                <ImageBackground
                                    source={require('../assets/Images/arrbox.png')}
                                    style={styles.uparrCntr}>
                                    <Image
                                        source={require('../assets/Images/uparr.png')}
                                        style={styles.uparrImg}
                                    />
                                </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={styles.priceTitle}
                                    maxLength={10}
                                    keyboardType="numeric"
                                    placeholder="0,00"
                                    value={text}
                                    placeholderTextColor={"#43464D"}
                                    onChangeText={handleTextChange} />
                                 <TouchableOpacity> 
                                <Image
                                    source={require('../assets/Images/dollar.png')}
                                    style={styles.dollarImg}
                                />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <TouchableOpacity style={[styles.row]}>
                            <View style={styles.column1}>
                                <Text style={styles.name}>{name}</Text>
                            </View>
                            <View style={styles.column2}>
                                <Text style={styles.shares}>{percentageChange} %</Text>
                            </View>
                            <View style={styles.column3}>
                                <Text style={styles.positiveChange}>
                                    {price} $
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flex: 1 }}>
                            <View style={styles.headerBox}>
                                <View style={styles.row2}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18 }}>
                                        <Image
                                            source={require('../assets/Images/reddown.png')}
                                            style={styles.redArr}
                                        />
                                        <Text style={styles.priceText}>{price} $</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../assets/Images/close.png')}
                                            style={styles.closeIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Text style={styles.buyText}>Set Alarm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    modalContainer: {
        padding: 20,
        height: "100%",
        width: "100%",
        backgroundColor: '#16171C',
        alignSelf: 'center',
    },
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        color: '#FFFFFF',
    },
    image: {
        width: 20,
        height: 20,
        padding: 0,
        left: 120,
        resizeMode: 'contain'
    },
    headerTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    arrowImgCtnr: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uparrCntr: {
        width: 32,
        height: 32,
        padding: 0,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    uparrImg: {
        padding: 1,
        width: 18.8176,
        height: 16,
        resizeMode: 'contain'
    },
    arrowImg: {
        width: 32,
        height: 32,
        padding: 0,
        resizeMode: 'contain'
    },
    priceTitle: {
        fontSize: 32,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#43464D',
        marginHorizontal: 10
    },
    dollarImg: {
        width: 32,
        height: 32,
        padding: 0,
        resizeMode: 'contain',
    },
    line: {
        padding: 0,
        width: 343,
        height: 0,
        borderBottomColor: '#040605',
        borderBottomWidth: 2,
        alignSelf: 'center',
        paddingTop: 5
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12
    },
    column1: {
        // flex: 1, 
        alignItems: 'flex-start',
    },
    column2: {
        flex: 1,
        alignItems: 'flex-end'
    },
    column3: {
        flex: 1,
        alignItems: 'flex-end'
    },

    name: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#43464D',
        letterSpacing: 0.06,
    },
    shares: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#43464D',
        letterSpacing: 0.06,
    },
    positiveChange: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#43464D',
        letterSpacing: 0.06,
    },

    negativeChange: {
        fontSize: 13,
        color: '#FF3165',
    },

    headerBox: {
        width: 374,
        height: 48,
        backgroundColor: '#1E1F26',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    redArr: {
        padding: 0,
        width: 12,
        height: 14.1132,
        resizeMode: 'contain'
    },
    priceText: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#FFFFFF',
        letterSpacing: 0.06,
        paddingHorizontal: 18
    },
    closeIcon: {
        width: 16,
        height: 16,
        padding: 0,
        resizeMode: 'contain',
        marginRight: 18
    },
    btnStyle: {
        width: 343,
        height: 48,
        backgroundColor: '#487FD9',
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyText: {
        fontSize: 16,
        lineHeight: 32,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 0.06,
    },

});

export default AlarmModal;
