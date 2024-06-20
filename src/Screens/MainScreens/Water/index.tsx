import React, { useState, useMemo} from "react";
import { SafeAreaView, Text, View } from "react-native";
import PerformanceD from "../../../Components/PerformanceDetail";
import CustomGlass from "../../../Components/CustomGlass";
import DetailsCard from "../../../Components/DetailsCard";
import { STRINGS } from "../../../Constants/strings";
import { useAppDispatch, useAppSelector } from "../../../Redux/Store";
import { updateHealthData } from "../../../Redux/Reducers/userHealth";
import { styles } from "./style";


const Water: React.FC = () => {

    const {dailyGlass,
    goals:{totalGlasses}}= useAppSelector((state)=> state.Health.data)
    console.log(dailyGlass)
    const dispatch = useAppDispatch();
   
    
      
    const handleGlassPress = (isFilled: boolean) => {
        if (isFilled) {
            dispatch(updateHealthData({ dailyGlass: dailyGlass + 1 }));
            console.log(dailyGlass)
        } else {
            dispatch(updateHealthData({ dailyGlass: dailyGlass - 1 }));
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.heading}>{STRINGS.WATER.HEADING} <Text style={styles.text}>{dailyGlass} glass{dailyGlass !== 1 ? "es" : ""}</Text>{STRINGS.WATER.TEXT}</Text>
            <View style={styles.glassContainer}>
                {[...Array(totalGlasses)].map((_, index) => (
                    <CustomGlass
                        key={index}
                        isFilled={false} // Initialize all glasses as unfilled
                        onPress={(isFilled) => handleGlassPress(isFilled)} // Pass handleGlassPress function
                        disable={dailyGlass==totalGlasses}
                    />
                ))}
           
               
            </View>
            <DetailsCard calNum="250 ml" calText="water drank" goalNum={`${totalGlasses} glasses`} goalText="Daily goal"/>
            {totalGlasses>dailyGlass ? <View style={styles.warning}>
                <Text style={styles.warningText}>{STRINGS.WATER.WARNTXT}</Text></View>:null}
            <PerformanceD />
        </SafeAreaView>
    );
};



export default Water;



