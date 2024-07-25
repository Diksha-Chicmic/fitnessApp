import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { EditScreenProps } from "../../../Constants/navigation";
import Settings from "../../../Components/CustomSetting";
import { COLORS, SIZES } from "../../../Constants/commonStyles";
function SettingScreen({navigation}:EditScreenProps){
    const moveToEditScreen=()=>{
        navigation.push('EditProfile')
    }
    const movetoFeedbackScreen=()=>{
        navigation.push('Feedback')
    }
    const moveToAboutUsScreen=()=>{
        navigation.push('AboutUs')
    }

const logOut=()=>{
  // dispatch(updateSettingsCachedData({isBiometricEnable:finger}));
    auth().signOut();
}
    return(
        <SafeAreaView style={styles.container}>
           <Text style={styles.heading}> Settings </Text>
           <Settings title="Edit Profile" onPress={moveToEditScreen}/>
           <Settings title="Push Notifications" hasSwitch={true}/>
           <Settings title= "Give Feedback" onPress={movetoFeedbackScreen}/>
           <Settings title="About us" onPress={moveToAboutUsScreen}/>
           <Settings title= "Log Out" onPress={logOut}/>

        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
      //marginHorizontal:10,
       flex:1,
       backgroundColor:COLORS.PRIMARY.GREY
    },
    heading:{
        fontSize:SIZES.font24,
        fontWeight:'bold',
        marginVertical:20
    }
})


export default SettingScreen

