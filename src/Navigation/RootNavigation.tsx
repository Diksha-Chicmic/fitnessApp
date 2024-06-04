import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstNav from "./landing";
import 'react-native-gesture-handler';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <FirstNav />
    </NavigationContainer>
  );
};

export default RootNavigator;