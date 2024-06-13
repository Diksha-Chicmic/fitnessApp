import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import AuthNavigator from "./authNavigation";
import { useAppSelector, useAppDispatch } from "../Redux/Store";
import Steps from "../Screens/MainScreens/Steps";
import Water from "../Screens/MainScreens/Water";
import Nutrition from "../Screens/MainScreens/Nutrition ";
import Home from "../Screens/MainScreens/Home";
import { homeStackParamList } from "../Constants/navigation";
import { COLORS } from "../Constants/commonStyles";

const Stack = createNativeStackNavigator<homeStackParamList>();



const AppNavigator = () => {
 
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerBackTitle: 'Back',
        headerShadowVisible: false,
        headerShown:false,
        headerTitle: "",
        headerStyle: { backgroundColor: COLORS.PRIMARY.GREY },
      }}
    >
      <Stack.Screen name="HomeNavigator" component={AuthNavigator}
      />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="DailySteps" component={Steps} />
      <Stack.Screen name="WaterIntake" component={Water} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
