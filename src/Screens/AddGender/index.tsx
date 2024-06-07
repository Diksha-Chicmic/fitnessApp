import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Alert, View } from "react-native";
import { ICONS } from "../../Constants/icons";
import SelectGender from "../../Components/SelectGender";
import CustomButton from '../../Components/CustomButton';
import { NAVIGATION,AddGenderProps } from '../../Constants/navigation';
import { STRINGS } from '../../Constants/strings';
import { styles } from './style';
const style = {
    width: 50,
    height: 50,
};

function AddGender({navigation}:AddGenderProps) {
    const [selectedGender, setSelectedGender] = useState<string>('');

    const handlePress = (gender: string) => {
        setSelectedGender(gender);
        console.log(`Selected gender: ${gender}`);
    };

    const handleNext = () => {
        if (!selectedGender) {
            Alert.alert('Please select a gender to continue.');
        } else {
             navigation.navigate(NAVIGATION.READYTOGO)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>{STRINGS.GENDER.HEADING}</Text>
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
            <Text style={styles.text}>{STRINGS.GENDER.TEXT}</Text>
            <CustomButton title={STRINGS.BUTTON.TITLE} onPress={handleNext} parentStyle={styles.button}/>
        </SafeAreaView>
    )
}


export default AddGender;
