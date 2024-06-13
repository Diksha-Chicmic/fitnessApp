import React from "react";
import { SafeAreaView, Text, StyleSheet,View } from "react-native";
import {ProgressChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
import Details from "../../../Components/CustomDetails";
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
            <Text style={styles.heading}> You burned <Text style={styles.text}>850 </Text>calories today</Text>
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
            <Details title='Protein' text='100g' percentage={22} color='red'/>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
     heading:{
        fontSize:SIZES.font24,
        textAlign:'center',
        fontWeight:'bold'
     },
     text:{
        color:COLORS.PRIMARY.PURPLE
     },
     container:{
        marginVertical:25,
        
     }
})
export default Nutrition


