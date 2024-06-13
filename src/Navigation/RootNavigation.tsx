import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstNav from "./landing";
import AppNavigator from "./appNavigation";
import { User } from "../Defs/user";


const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <FirstNav/> */}
    </NavigationContainer>
  );
};

export default RootNavigator;

{/* <NavigationContainer>
{!user ? <FirstNav/> : < AppNavigator/>}
</NavigationContainer> */}