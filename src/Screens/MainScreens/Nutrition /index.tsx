import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
import { getPercentage } from "../../../utils/common";
import Details from "../../../Components/CustomDetails";
import DietDataList from "../../../Components/DietDataList";
import { useAppSelector } from "../../../Redux/Store";
import { STRINGS } from "../../../Constants/strings";
import { styles } from "./style";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: COLORS.SECONDARY.GREY,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(114,101,227, ${opacity})`,
};


function Nutrition() {
    const {nutrition}= useAppSelector((state)=>state.Health.data);
    const {data: dailyMeals} = useAppSelector(state => state.Dishes);
      const statsData = Object.values(dailyMeals)
    .flat()
    .reduce(
      (acc, val) => ({
        calories: Math.ceil(val.calories + acc.calories),
        carbs: Math.ceil(val.carbs + acc.carbs),
        fat: Math.ceil(val.fat + acc.fat),
        protein: Math.ceil(val.protein + acc.protein),
      }),
      {
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
      },
    );
    const proteinPercentage = Math.ceil(getPercentage(statsData.protein, statsData.calories)) / 100;
    const carbsPercentage = Math.ceil(getPercentage(statsData.carbs, statsData.calories)) / 100;
    const fatPercentage = Math.ceil(getPercentage(statsData.fat, statsData.calories)) / 100;

    const data = {
        labels: ["Protein", "Carb", "Fat"], // optional
        data: [proteinPercentage, carbsPercentage, fatPercentage]
    };
    return (

        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading}> {STRINGS.NUTRITION.HEADING} <Text style={styles.text}>{nutrition} </Text>{STRINGS.NUTRITION.TEXT}</Text>
                <View style={styles.container}>
                    <ProgressChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        strokeWidth={19}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={false}
                    />
                </View>
        
                <Details title='Protein' text={statsData.protein} percentage={proteinPercentage*100} color={COLORS.SECONDARY.ORANGE} />
                <Details title='Carb' text={statsData.carbs} percentage={carbsPercentage*100} color={COLORS.PRIMARY.PURPLE} />
                <Details title='Fat' text={statsData.fat} percentage={fatPercentage*100} color={COLORS.SECONDARY.CYAN} borderCheck={false} />
                <DietDataList />
            </ScrollView>
        </SafeAreaView>

    )
}



export default Nutrition




