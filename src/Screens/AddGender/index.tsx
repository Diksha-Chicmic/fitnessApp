import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Alert, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import SelectGender from "../../Components/SelectGender";
import CustomButton from '../../Components/CustomButton';
import { styles } from './style';
const style = {
    width: 50,
    height: 50,
};

function AddGender() {
    const [selectedGender, setSelectedGender] = useState<string>('');

    const handlePress = (gender: string) => {
        setSelectedGender(gender);
        console.log(`Selected gender: ${gender}`);
    };

    const handleNext = () => {
        if (!selectedGender) {
            Alert.alert('Please select a gender to continue.');
        } else {
             console.log('next');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Which one are you?</Text>
            <View style={styles.genderContainer}>
                <SelectGender
                    text='Male'
                    onPress={() => handlePress('male')}
                    selected={selectedGender === 'male'}
                    icon={ICONS.MALE(style)}
                />
                <SelectGender
                    text='Female'
                    onPress={() => handlePress('female')}
                    selected={selectedGender === 'female'}
                    icon={ICONS.FEMALE(style)}
                />
               
            </View>
            <Text style={styles.text}>To give you a better experience we need to know your gender </Text>
            <CustomButton title='Continue' onPress={handleNext} parentStyle={styles.button}/>
        </SafeAreaView>
    )
}


export default AddGender;
