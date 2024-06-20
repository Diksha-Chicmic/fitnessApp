import React from "react";
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import {LineChart, } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import { COLORS } from "../../../Constants/commonStyles";
import { useAppSelector } from "../../../Redux/Store";
import { date } from "../../../utils/common";
import DetailsCard from "../../../Components/DetailsCard";
import PerformanceD from "../../../Components/PerformanceDetail";
import { ICONS } from "../../../Constants/icons";
import { STRINGS } from "../../../Constants/strings";
import { styles } from "./style";

const screenWidth = Dimensions.get("window").width;


const data = [{ value: 10 }, { value: 30 }, { value: 60 }, { value: 40 }, { value: 9 }, { value: 50 }, { value: 12 }]

function Steps() {

    const today = date.today();
    const { totalSteps,
            nutrition,
            goals: { stepsGoal, totalNutrition },
          } = useAppSelector((state) => state.Health.data);
          const { id } = useAppSelector((state) => state.User.data);
    
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading} >{STRINGS.STEPS.HEADING}<Text style={styles.insideTxt}> {totalSteps}</Text> {STRINGS.STEPS.TEXT} </Text>
                <View style={styles.container}>
                    <CircularProgress
                        value={totalSteps}
                        inActiveStrokeColor={COLORS.SECONDARY.WHITE}
                        progressValueColor={'black'}
                        valueSuffix={'%'}
                        radius={70}
                        activeStrokeColor={COLORS.PRIMARY.PURPLE}
                        progressValueStyle={styles.progress} 
                        />
                    <View style={styles.iconContainer}>{ICONS.COMMUNITY({ height: 20, width: 20 })}</View>
                    <Text style={styles.textContainer}>{STRINGS.STEPS.PROGESSTXT}</Text>
                </View>
                <DetailsCard calNum="1300" calText="Cal Burned" goalNum={stepsGoal} goalText="daily goal" />
                <View style={{ backgroundColor: 'white', marginBottom: 20, borderRadius: 20 }}>
                    <Text style={styles.text}>{STRINGS.STEPS.LINETXT}</Text>
                    <LineChart
                        adjustToWidth
                        curved
                        yAxisColor="#ffff"
                        xAxisColor="#ffff"
                        color="#F7A608"
                        yAxisOffset={1}
                        initialSpacing={0}
                        width={screenWidth/1.13}
                        data={data}
                        hideOrigin
                        areaChart
                        startFillColor="#F8B631"
                        endFillColor1="#FBDA95"
                        hideDataPoints
                        hideRules
                        onlyPositive
                        stepHeight={25}
                        thickness={9}
                        yAxisTextStyle={{ color: COLORS.SECONDARY.GREY }}
                        disableScroll


                    />
                </View>
                <PerformanceD />
            </ScrollView>
        </SafeAreaView>
    )
}


export default Steps










       
        
      

