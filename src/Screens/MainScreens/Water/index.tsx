import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import PerformanceD from "../../../Components/PerformanceDetail";
import CustomGlass from "../../../Components/CustomGlass";
import DetailsCard from "../../../Components/DetailsCard";
import { STRINGS } from "../../../Constants/strings";
import { styles } from "./style";


const Water: React.FC = () => {
    const totalGlasses = 8; // Total number of glasses
    const [filledCount, setFilledCount] = useState<number>(0); // State to track filled glasses count

    // Function to handle glass press and update filled count
    const handleGlassPress = (isFilled: boolean) => {
        if (isFilled) {
            setFilledCount((prevCount) => prevCount + 1); // Increment filled count
        } else {
            setFilledCount((prevCount) => prevCount - 1); // Decrement filled count
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.heading}>{STRINGS.WATER.HEADING} <Text style={styles.text}>{filledCount} glass{filledCount !== 1 ? "es" : ""}</Text>{STRINGS.WATER.TEXT}</Text>
            <View style={styles.glassContainer}>
                {[...Array(totalGlasses)].map((_, index) => (
                    <CustomGlass
                        key={index}
                        isFilled={false} // Initialize all glasses as unfilled
                        onPress={(isFilled) => handleGlassPress(isFilled)} // Pass handleGlassPress function
                    />
                ))}
               
            </View>
            <DetailsCard calNum="250 ml" calText="water drank" goalNum={`${filledCount} glasses`} goalText="Daily goal"/>
            {totalGlasses>filledCount ? <View style={styles.warning}>
                <Text style={styles.warningText}>{STRINGS.WATER.WARNTXT}</Text></View>:null}
            <PerformanceD />
        </SafeAreaView>
    );
};



export default Water;



