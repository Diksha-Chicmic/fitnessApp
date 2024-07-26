import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { EditScreenProps } from "../../../Constants/navigation";
import Settings from "../../../Components/CustomSetting";
import { styles } from "./style";
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
    const moveToResetScreen=()=>{
        navigation.push('ResetPassword')
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
           <Settings title="Reset Password" onPress={moveToResetScreen}/>
           <Settings title= "Log Out" onPress={logOut}/>
        </SafeAreaView>
    )
}




export default SettingScreen

