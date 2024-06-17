import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
import Details from "../../../Components/CustomDetails";
import DietDataList from "../../../Components/ModalDetails ";
import { STRINGS } from "../../../Constants/strings";
import { styles } from "./style";

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Protein", "Carb", "Fat"], // optional
    data: [0.63, 0.3, 0.27]
};
const chartConfig = {
    backgroundGradientFrom: COLORS.SECONDARY.GREY,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(114,101,227, ${opacity})`,
};
function Nutrition() {
    return (

        <SafeAreaView>
            <ScrollView>
                <Text style={styles.heading}> {STRINGS.NUTRITION.HEADING} <Text style={styles.text}>850 </Text>{STRINGS.NUTRITION.TEXT}</Text>
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
                <Details title='Protein' text={100} percentage={22} color={COLORS.SECONDARY.ORANGE} />
                <Details title='Carb' text={60} percentage={30} color={COLORS.PRIMARY.PURPLE} />
                <Details title='Fat' text={20} percentage={27} color={COLORS.SECONDARY.CYAN} borderCheck={false} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <DietDataList />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}



export default Nutrition


