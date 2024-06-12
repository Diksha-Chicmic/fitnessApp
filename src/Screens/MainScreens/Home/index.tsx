import React from "react";
import { SafeAreaView, Text, TouchableOpacity ,StyleSheet,View} from "react-native";
import { HomeScreenProps } from "../../../Constants/navigation";
import CustomCard from "../../../Components/CustomCard";
import { ICONS } from "../../../Constants/icons";
import { COLORS,SIZES } from "../../../Constants/commonStyles";
function Home({navigation}:HomeScreenProps){
    function press(){
        console.log('press')
    }
    return(
        <SafeAreaView >
            <View style={styles.container}>
           <Text style={styles.heading}> Good Morning, </Text>
           <Text style={styles.text}> Eat the right amount of food and stay hydrated through the day </Text>
           <TouchableOpacity>
            <Text style={styles.text2}>More details </Text>
           </TouchableOpacity>
           </View>
          <CustomCard title="Nutrition" percentage={80}
          point='850 cal / 1200 cal' icon={ICONS.FASHION} onPress={press}/>
           <CustomCard title="Water" percentage={22}
          point='3 / 8 glasses' icon={ICONS.FASHION} onPress={press}/>
           <CustomCard title="Daily Steps" percentage={70}
          point='7000 steps/ 10000 steps' icon={ICONS.FASHION} onPress={press}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container:{
      padding:20,
   },
    heading:{
        fontSize:SIZES.font24,
         fontWeight:'bold',
         paddingVertical:10
    },
    text:{
        fontSize:SIZES.font11,
        paddingVertical:10
    },
    text2:{
        color:COLORS.PRIMARY.PURPLE,
        fontSize:SIZES.font13,
        fontWeight:'bold',
        paddingVertical:10
    }
})
export default Home



// libs
// import React from "react";
// import { Text, TouchableOpacity, View } from "react-native";

// // custom
// import { useAppSelector } from "../../../Redux/Store";
// import { CustomHomeDetailsCard } from "../../../Components";
// import { ICONS, STRING } from "../../../Constants";
// import { HomeScreenProps } from "../../../Defs";
// import { styles } from "./styles";
// import Animated, { SlideInLeft, Easing } from "react-native-reanimated";

// const currentTime = new Date().getHours();
// const HomeScreen = ({ navigation }: HomeScreenProps) => {
//   const goToNutrition = (): void => navigation.push("Nutrition");
//   const goToWaterIntake = (): void => navigation.push("WaterIntake");
//   const goToDailySteps = (): void => navigation.push("DailySteps");
//   const {
//     todaysSteps,
//     waterIntake,
//     nutrition,
//     goal: { noOfGlasses, totalSteps, totalCalorie },
//   } = useAppSelector((state) => state.health.value);
//   const { firstName } = useAppSelector((state) => state.User.data);
//   return (
//     <Animated.View
//       style={styles.parent}
//       entering={SlideInLeft.easing(Easing.ease)}
//     >
//       <Text style={styles.titleText}>
//         {STRING.HOME_SCREEN.TITLE} {currentTime > 13 ? "Evening" : "Morning"}{" "}
//         {firstName}
//       </Text>
//       <Text style={styles.descriptionText}>
//         {STRING.HOME_SCREEN.DESCRIPTION}
//       </Text>
//       <TouchableOpacity>
//         <Text style={styles.detailsText}>
//           {STRING.HOME_SCREEN.MORE_DETAILS}
//         </Text>
//       </TouchableOpacity>
//       <View style={styles.catageroiesCtr}>
//         <CustomHomeDetailsCard
//           title={STRING.HOME_SCREEN.NUTRITION}
//           handleOnPress={goToNutrition}
//           icon={ICONS.Nutrition}
//           status={STRING.HOME_SCREEN.detailsString(
//             nutrition,
//             totalCalorie,
//             STRING.HOME_SCREEN.CALORIES
//           )}
//           markerPercentage={(nutrition / totalCalorie) * 100}
//         />
//         <CustomHomeDetailsCard
//           title={STRING.HOME_SCREEN.WATER}
//           handleOnPress={goToWaterIntake}
//           icon={ICONS.Water}
//           status={STRING.HOME_SCREEN.detailsString(
//             waterIntake,
//             noOfGlasses,
//             STRING.HOME_SCREEN.GLASSES
//           )}
//           markerPercentage={(waterIntake / noOfGlasses) * 100}
//         />
//         <CustomHomeDetailsCard
//           title={STRING.HOME_SCREEN.DAILY_STEPS}
//           handleOnPress={goToDailySteps}
//           icon={ICONS.ManWalking}
//           status={STRING.HOME_SCREEN.detailsString(
//             todaysSteps,
//             totalSteps,
//             STRING.HOME_SCREEN.STEPS
//           )}
//           markerPercentage={(todaysSteps / totalSteps) * 100}
//         />
//       </View>
//     </Animated.View>
//   );
// };

// export default HomeScreen;