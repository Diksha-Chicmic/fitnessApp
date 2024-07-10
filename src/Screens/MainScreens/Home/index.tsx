import React from "react";
import { SafeAreaView, Text, TouchableOpacity ,StyleSheet,View} from "react-native";
import { HomeScreenProps } from "../../../Constants/navigation";
import { ICONS } from "../../../Constants/icons";
import { STRINGS } from "../../../Constants/strings";
import CustomCard from "../../../Components/CustomCard";
import { useAppSelector } from "../../../Redux/Store";
import { styles } from "./style";
function Home({navigation}:HomeScreenProps){
   const { totalSteps,
        nutrition,
        dailyGlass,
        goals: { stepsGoal, totalNutrition, totalGlasses },
      } = useAppSelector((state) => state.Health.data);
      const { id, firstName, lastName } = useAppSelector((state) => state.User.data);
      const userName= firstName
   const nutritions=()=>navigation.navigate('Nutrition')  
   const water =()=> navigation.navigate('WaterIntake')
   const steps =()=> navigation.navigate('DailySteps')  
   const nutritionPercentage = (nutrition / totalNutrition) * 100;
   const waterPercentage = (dailyGlass / totalGlasses) * 100;
   const stepsPercentage = (totalSteps / stepsGoal) * 100;
    return(
        <SafeAreaView >
            <View style={styles.container}>
           <Text style={styles.heading}> {STRINGS.HOME.HEADING} {userName} </Text>
           <Text style={styles.text}>  {STRINGS.HOME.TEXT} </Text>
           <TouchableOpacity>
            <Text style={styles.text2}>{STRINGS.HOME.TEXT2}</Text>
           </TouchableOpacity>
           </View>
           <CustomCard title="Nutrition" percentage={nutritionPercentage} point={`${nutrition} cal / ${totalNutrition} cal`}  icon={ICONS.FASHION} onPress={nutritions}/>
           <CustomCard title="Water" percentage={waterPercentage} point={`${dailyGlass} / ${totalGlasses} glasses`} icon={ICONS.FASHION} onPress={water}/>
           <CustomCard title="Daily Steps" percentage={stepsPercentage} point={` ${totalSteps} steps/ ${stepsGoal} steps`} icon={ICONS.FASHION} onPress={steps}/>
      </SafeAreaView>
    )
}

export default Home




