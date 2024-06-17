import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from './style';

interface PassInpProps{
    length: boolean,
    number: boolean,
    uppercase: boolean
}
const PassInputCheck:React.FC<PassInpProps> = ({
    length,
    number,
    uppercase }) => {
    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <View style={[styles.box, length ? styles.boxFill : null]}></View>
                <Text style={styles.text}>8+ characters</Text>
            </View>
            <View style={styles.field}>
                <View style={[styles.box, uppercase ? styles.boxFill : null]}></View>
                <Text style={styles.text}>At least 1 uppercase</Text>
            </View>
            <View style={styles.field}>
                <View style={[styles.box, number ? styles.boxFill : null]}></View>
                <Text style={styles.text}>At least 1 number</Text>
            </View>
        </View>
    )
}



export default PassInputCheck;
