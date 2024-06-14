import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View ,Dimensions} from "react-native";
import PerformanceD from "../../../Components/PerformanceDetail";
import CustomGlass from "../../../Components/CustomGlass";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
import DetailsCard from "../../../Components/DetailsCard";
const screenWidth =Dimensions.get('window').width
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>You drank <Text style={styles.text}>{filledCount} glass{filledCount !== 1 ? "es" : ""}</Text> today</Text>
            <View style={styles.glassContainer}>
                {[...Array(totalGlasses)].map((_, index) => (
                    <CustomGlass
                        key={index}
                        isFilled={false} // Initialize all glasses as unfilled
                        onPress={(isFilled) => handleGlassPress(isFilled)} // Pass handleGlassPress function
                    />
                ))}
               
            </View>
            <DetailsCard calNum="250 ml" calText="Cal Burned" goalNum={`${filledCount} glasses`} goalText="Daily goal"/>
            {totalGlasses>filledCount ? <View style={styles.warning}>
                <Text style={styles.warningText}>You didn't drink enough water for today.</Text></View>:null}
            <PerformanceD />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
       // padding: 20,
       width:screenWidth
    },
    text: {
       color:COLORS.PRIMARY.PURPLE
    },
    glassContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
    },
    warning:{
        backgroundColor:'pink',
        paddingVertical:15,
        opacity:0.7,
        width:screenWidth
    },
    warningText:{
        color:COLORS.SECONDARY.RED,
        textAlign:'center',
        fontSize:SIZES.font11,
        fontWeight:'bold',
        padding:2,
        letterSpacing:0.4,
        
    },
    heading:{
        fontSize:SIZES.font24,
        fontWeight:'bold',
        textAlign:'center',
        paddingHorizontal:10,
        margin:10

        
    }
});

export default Water;



