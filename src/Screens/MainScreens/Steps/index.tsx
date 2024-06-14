import React from "react";
import { SafeAreaView, Text,ScrollView,View} from "react-native";
// import {
//     LineChart,

// } from "react-native-chart-kit";
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import { COLORS } from "../../../Constants/commonStyles";
const screenWidth = Dimensions.get("window").width;


const data=[ {value:10}, {value: 30}, {value:60}, {value:40} , {value: 9}, {value:50}, {value:12}]



function Steps() {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text> STEPS SCREEN</Text>

                  
<View style={{backgroundColor:'white' }}>
    <Text>Statistic</Text>
<LineChart
          
         adjustToWidth
          curved
          yAxisColor="#ffff"
          xAxisColor="#ffff"
          color="#F7A608"
          yAxisOffset={1}
          initialSpacing={0}
          width={350}
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
            </ScrollView>
        </SafeAreaView>
    )
}


export default Steps