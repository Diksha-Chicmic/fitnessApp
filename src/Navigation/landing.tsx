import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../Screens/LandingPage";
import SignIn from "../Screens/SignIn";
import AddEmail from "../Screens/AddEmail";
import { onboardingStackParamList } from "../Constants/navigation";
import { NAVIGATION } from "../Constants/navigation";
import Header from "../Components/CustomHeader";
import AddPassword from "../Screens/AddPassword";
import AddFingerprint from "../Screens/AddFingerprint";
import AddProfile from "../Screens/AddProfile";
import AddPreferences from "../Screens/AddPrefences";
import AddInterest from "../Screens/AddInterest";
import AddGender from "../Screens/AddGender";
const Stack = createNativeStackNavigator<onboardingStackParamList>();


const FirstNav = () => {
    return (
      <Stack.Navigator
        initialRouteName= "LandingPage"
        screenOptions={{ header: Header }}
      >
        <Stack.Screen  name={NAVIGATION.LANDING} component={LandingPage} />
        <Stack.Screen  name={NAVIGATION.SIGNIN} component={SignIn} />
        <Stack.Screen name={NAVIGATION.ADDEMAIL} component={AddEmail}/>
        <Stack.Screen name={NAVIGATION.ADDPASSWORD} component ={AddPassword}/>
        <Stack.Screen name={NAVIGATION.ADDFINGERPRINT} component={AddFingerprint}/>
        <Stack.Screen name ={NAVIGATION.ADDPROFILE} component={AddProfile} />
        <Stack.Screen name={NAVIGATION.ADDPREFERENCES} component={AddPreferences}/>
        <Stack.Screen name={NAVIGATION.ADDINTEREST} component={AddInterest}/>
        <Stack.Screen name={NAVIGATION.ADDGENDER} component={AddGender}/>
      </Stack.Navigator>
    );
  };

  export default FirstNav
