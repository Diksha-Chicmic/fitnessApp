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

    return(
        <SafeAreaView >
            <View style={styles.container}>
           <Text style={styles.heading}> {STRINGS.HOME.HEADING} {userName} </Text>
           <Text style={styles.text}>  {STRINGS.HOME.TEXT} </Text>
           <TouchableOpacity>
            <Text style={styles.text2}>{STRINGS.HOME.TEXT2}</Text>
           </TouchableOpacity>
           </View>
           <CustomCard title="Nutrition" percentage={80} point={`${nutrition} cal / ${totalNutrition} cal`}  icon={ICONS.FASHION} onPress={nutritions}/>
           <CustomCard title="Water" percentage={22} point={`${dailyGlass} / ${totalGlasses} glasses`} icon={ICONS.FASHION} onPress={water}/>
           <CustomCard title="Daily Steps" percentage={70} point={` ${totalSteps} steps/ ${stepsGoal} steps`} icon={ICONS.FASHION} onPress={steps}/>
      </SafeAreaView>
    )
}

export default Home




