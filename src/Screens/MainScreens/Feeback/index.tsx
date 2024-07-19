import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, SIZES } from '../../../Constants/commonStyles';
import CustomButton from '../../../Components/CustomButton';
import { ICONS } from '../../../Constants/icons';

const Feedback = () => {
    const [feedbackText, setFeedBackText] = useState<string>('');

    const handleInput = (newFeedText: string) => {
        setFeedBackText(newFeedText);
    };

    const handlePress = () => {
        console.log('Pressed');
        // Additional logic for handling feedback submission can be added here
    };

    return (
        <KeyboardAwareScrollView>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                {ICONS.Logo({ height: 60, width: 60 })}
            </View>
            <Text style={styles.heading}>Feedback</Text>
            <Text style={styles.subheading}>We Value Your Feedback</Text>
            <Text style={styles.text}>Please share your thoughts and suggestions with us:</Text>
            <TextInput
                editable
                multiline
                numberOfLines={10}
                maxLength={150}
                onChangeText={handleInput}
                value={feedbackText}
                style={styles.input}
                placeholder="Write your feedback here..."
            />
            <Text style={styles.thank}>Thank You! 😊</Text>
            <CustomButton title="Submit" onPress={handlePress} />
        </ScrollView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.PRIMARY.DIMGREY,
        padding: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15%',
    },
    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
        // color: COLORS.SECONDARY.WHITE,
        marginBottom: '3%',
    },
    subheading: {
        fontSize: SIZES.font18,
        textAlign: 'center',
        color: COLORS.SECONDARY.GREY,
        marginBottom: '8%',
    },
    text: {
        fontSize: SIZES.font15,
        color: COLORS.SECONDARY.LIGHTGREY,
        textAlign: 'center',
        marginBottom: '8%',
    },
    input: {
        borderWidth: 1,
        fontSize: SIZES.font15,
        borderColor: COLORS.PRIMARY.DIMPURPLE,
        padding: '6%',
        backgroundColor: COLORS.SECONDARY.WHITE,
        width: '100%',
        borderRadius: 10,
        marginBottom: '8%',
    },
    thank: {
        textAlign: 'center',
        fontSize: SIZES.font18,
        color: COLORS.PRIMARY.PURPLE,
        opacity: 0.7,
        marginVertical: '8%',
    },
});

export default Feedback;
