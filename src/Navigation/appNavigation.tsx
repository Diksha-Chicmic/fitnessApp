import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { rootStackParamList } from "../Constants/navigation";
import { NAVIGATION } from "../Constants/navigation";

// navigators
import FirstNav from "./landing";

const Stack = createNativeStackNavigator<rootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.ONBOARDING}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={NAVIGATION.ONBOARDING} component={FirstNav} />
    </Stack.Navigator>
  );
};

export default AppNavigator;