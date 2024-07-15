import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { LineChart, } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import { COLORS } from "../../../Constants/commonStyles";
import { useAppSelector } from "../../../Redux/Store";
import DetailsCard from "../../../Components/DetailsCard";
import { STRINGS } from "../../../Constants/strings";
import { date, checkWeek, getPercentage, weekday } from "../../../utils/common";
import { getHealthData } from "../../../utils/userhandle";
import { ICONS } from "../../../Constants/icons";
import { styles } from "./style";
import { Timestamp } from "@react-native-firebase/firestore";
import PerformanceDetails from "../../../Components/CustomPerformance ";
const screenWidth = Dimensions.get("window").width;


const data = [{ value: 10 }, { value: 30 }, { value: 60 }, { value: 40 }, { value: 9 }, { value: 50 }, { value: 12 }]

function Steps() {
    const today = date.today();
    const { totalSteps, nutrition, goals: { stepsGoal, totalNutrition }, } = useAppSelector((state) => state.Health.data);
    const { id } = useAppSelector((state) => state.User.data);
    const [rating, setRating] = useState<{
        best: { value: number; week: string };
        worst: { value: number; week: string };
    }>();
    useEffect(() => {
        console.log('Diksha useffect')
        getHealthData(id!)
            .then(healthData => {
                console.log('healthData firebase',healthData)
                if (healthData) {
                    console.log('inside if ' )
                    const filteredData = healthData.filter(val =>
                        checkWeek(Timestamp.fromMillis(val.currentDate.seconds * 1000).toDate(), today,),
                    );
                    console.log('filtered Data', filteredData);
                    const bestWaterIntakeDay = filteredData.reduce(
                        (acc, val) => {
                            const currentDate = Timestamp.fromMillis(val.currentDate.seconds * 1000,).toDate();
                            if (Math.ceil(getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,) >= acc.value) {
                                return {
                                    value: Math.ceil(getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,),
                                    week: weekday[currentDate.getDay()],
                                };
                            }
                            return acc;
                        }, { value: 0, week: '' },
                    );
                    const worstWaterIntakeDay = filteredData.reduce(
                        (acc, val) => {
                            const currentDate = Timestamp.fromMillis(val.currentDate.seconds * 1000,).toDate();
                            console.log(weekday[currentDate.getDay()], currentDate);
                            if (Math.ceil(getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,) <= acc.value) {
                                return {
                                    value: Math.ceil(
                                        getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,
                                    ),
                                    week: weekday[currentDate.getDay()],
                                };
                            }
                            return acc;
                        }, { value: 0, week: '', },
                    );
                    setRating({ best: bestWaterIntakeDay, worst: worstWaterIntakeDay });
                }
            })
            .catch(e =>
                console.log('error encounterd in getting user health info', e),
            );
    }, [id, today]);



    return (
        <SafeAreaView style={styles.parent}>
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
                        width={screenWidth / 1.13}
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
                {rating === undefined || rating?.best.value === -Infinity ? null : (
                <PerformanceDetails
                    icon={ICONS.YELLOWSMILE({ height: 20, width: 20, color: 'orange' })}
                    title="Best Performance"
                    text={rating?.best.week ?? 'No Data'}
                    quant={rating?.best.value ?? 0}
                    border={true}
                />
                 )} 
                {rating === undefined || rating?.worst.value === Infinity ? null : ( 
                <PerformanceDetails
                    icon={ICONS.REDSMILE({ height: 20, width: 20 })}
                    title="Worst Performance"
                    text={rating?.worst.week ?? 'No data'}
                    quant={rating?.worst.value ?? 0}
                />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}


export default Steps














