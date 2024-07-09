import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ICONS } from '../../../Constants/icons';
import { COLORS, SIZES } from '../../../Constants/commonStyles';
import CustomButton from '../../../Components/CustomButton';

const AboutUs = () => {
    const handlePress = () => {
        console.log('Pressed');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
                {ICONS.Logo({ height: 60, width: 60 })}
            </View>
            <Text style={styles.heading}>Fitness App</Text>
            <Text style={styles.subtitle}>Your Journey to a Healthier Life</Text>
            <Text style={styles.text}>
                Welcome to Fitness App, your ultimate companion in the journey towards achieving your health and fitness goals. Whether you are a beginner or a seasoned athlete.
            </Text>
            <Text style={styles.sectionTitle}>Features</Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>Personalized Workout Plans:</Text> Get workout plans tailored to your fitness level and goals, whether it's losing weight, building muscle, or improving endurance.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>Nutrition Guides:</Text> Access a variety of nutrition plans and recipes to complement your workout regime and help you achieve your desired results faster.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>Progress Tracking:</Text> Monitor your progress with our intuitive tracking system. Log your workouts, track your nutrition, and see your improvements over time.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>Community Support:</Text> Connect with other fitness enthusiasts, share your journey, and find inspiration from the community.
            </Text>
            <Text style={styles.sectionTitle}>Our Mission</Text>
            <Text style={styles.text}>
                At Fitness App, our mission is to empower individuals to lead healthier, happier lives. We believe in making fitness accessible and enjoyable for everyone.
            </Text>
            <Text style={styles.thank}>Thank you for choosing Us!</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.PRIMARY.DIMGREY,
        padding: '5%',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    heading: {
        fontSize: SIZES.fontH2,
        fontWeight: 'bold',
        textAlign: 'center',
        //color: COLORS.PRIMARY.PURPLE,
    },
    subtitle: {
        fontSize: SIZES.font18,
        textAlign: 'center',
         color: COLORS.SECONDARY.GREY,
        marginBottom: 20,
       // color:COLORS.PRIMARY.PURPLE,
        fontWeight:'bold'
    },
    text: {
        fontSize: SIZES.font15,
        color: COLORS.SECONDARY.GREY,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: SIZES.fontH3,
        fontWeight: 'bold',
       // color: COLORS.PRIMARY.PURPLE,
        marginVertical: 10,
    },
    bold: {
        fontWeight: 'bold',
        color:'black'
       // color:COLORS.PRIMARY.PURPLE
    },
    thank: {
        textAlign: 'center',
        fontSize: SIZES.fontH3,
        color: COLORS.PRIMARY.PURPLE,
        marginVertical: 20,
        fontWeight:'bold'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default AboutUs;
