import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Settings from "../../../Components/CustomSetting";
import { SIZES } from "../../../Constants/commonStyles";
function SettingScreen(){
    return(
        <SafeAreaView style={styles.container}>
           <Text style={styles.heading}> Settings </Text>
           <Settings title="Edit Profile"/>
           <Settings title="Push Notifications" toggle={true}/>
           <Settings title= "Give Feedback"/>
           <Settings title="About us"/>
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