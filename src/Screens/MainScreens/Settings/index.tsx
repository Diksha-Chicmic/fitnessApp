import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { EditScreenProps } from "../../../Constants/navigation";
import Settings from "../../../Components/CustomSetting";
import { SIZES } from "../../../Constants/commonStyles";
function SettingScreen({navigation}:EditScreenProps){
    const moveToEditScreen=()=>{
        navigation.navigate('EditProfile')
    }
    const movetoFeedbackScreen=()=>{
        navigation.navigate('Feedback')
    }
    const moveToAboutUsScreen=()=>{
        navigation.navigate('AboutUs')
    }
    return(
        <SafeAreaView style={styles.container}>
           <Text style={styles.heading}> Settings </Text>
           <Settings title="Edit Profile" onPress={moveToEditScreen}/>
           <Settings title="Push Notifications" toggle={true}/>
           <Settings title= "Give Feedback" onPress={movetoFeedbackScreen}/>
           <Settings title="About us" onPress={moveToAboutUsScreen}/>
           <Settings title= "Log Out"/>

        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
       marginHorizontal:10,
       flex:1
    },
    heading:{
        fontSize:SIZES.font24,
        fontWeight:'bold',
        marginVertical:20
    }
})


export default SettingScreen