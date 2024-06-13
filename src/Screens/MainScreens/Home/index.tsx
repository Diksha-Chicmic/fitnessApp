import React from "react";
import { SafeAreaView, Text, TouchableOpacity ,StyleSheet,View} from "react-native";
import { HomeScreenProps } from "../../../Constants/navigation";
import { ICONS } from "../../../Constants/icons";
import { STRINGS } from "../../../Constants/strings";
import CustomCard from "../../../Components/CustomCard";
import { styles } from "./style";
function Home({navigation}:HomeScreenProps){
   const nutrition=()=>navigation.navigate('Nutrition')  
   const water =()=> navigation.navigate('WaterIntake')
   const steps =()=> navigation.navigate('DailySteps')
   function press(){
    console.log('press');
   }  

    return(
        <SafeAreaView >
            <View style={styles.container}>
           <Text style={styles.heading}> {STRINGS.HOME.HEADING} </Text>
           <Text style={styles.text}>  {STRINGS.HOME.TEXT} </Text>
           <TouchableOpacity>
            <Text style={styles.text2}>{STRINGS.HOME.TEXT2}</Text>
           </TouchableOpacity>
           </View>
           <CustomCard title="Nutrition" percentage={80} point='850 cal / 1200 cal' icon={ICONS.FASHION} onPress={nutrition}/>
           <CustomCard title="Water" percentage={22} point='3 / 8 glasses' icon={ICONS.FASHION} onPress={water}/>
           <CustomCard title="Daily Steps" percentage={70} point='7000 steps/ 10000 steps' icon={ICONS.FASHION} onPress={steps}/>

        </SafeAreaView>
    )
}

export default Home




