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
import AddPreferences from "../Screens/AddPreferences";
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
      </Stack.Navigator>
    );
  };

  export default FirstNav
