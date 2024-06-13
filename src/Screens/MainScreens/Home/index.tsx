import React from "react";
import { SafeAreaView, Text, TouchableOpacity ,StyleSheet,View} from "react-native";
import { HomeScreenProps } from "../../../Constants/navigation";
import { ICONS } from "../../../Constants/icons";
import { COLORS,SIZES } from "../../../Constants/commonStyles";
import CustomCard from "../../../Components/CustomCard";
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
           <Text style={styles.heading}> Good Morning, </Text>
           <Text style={styles.text}> Eat the right amount of food and stay hydrated through the day </Text>
           <TouchableOpacity>
            <Text style={styles.text2}>More details </Text>
           </TouchableOpacity>
           </View>
           <CustomCard title="Nutrition" percentage={80} point='850 cal / 1200 cal' icon={ICONS.FASHION} onPress={nutrition}/>
           <CustomCard title="Water" percentage={22} point='3 / 8 glasses' icon={ICONS.FASHION} onPress={water}/>
           <CustomCard title="Daily Steps" percentage={70} point='7000 steps/ 10000 steps' icon={ICONS.FASHION} onPress={steps}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container:{
      paddingLeft:20,
      
   },
    heading:{
        fontSize:SIZES.font24,
         fontWeight:'bold',
         paddingVertical:10
    },
    text:{
        fontSize:SIZES.font11,
        paddingVertical:10,
        width:'70%',
        
       
    },
    text2:{
        color:COLORS.PRIMARY.PURPLE,
        fontSize:SIZES.font13,
        fontWeight:'bold',
        paddingVertical:10
    }
})
export default Home




