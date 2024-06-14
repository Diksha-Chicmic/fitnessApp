import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstNav from "./landing";
import AppNavigator from "./appNavigation";
import { User } from "../Defs/user";


const RootNavigator = () => {
  const [user, setUser] = useState<User>();
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <FirstNav/> */}
      {/* {!user ? <FirstNav/> : < AppNavigator/>} */}
    </NavigationContainer>
  );
};

export default RootNavigator;

{/* <NavigationContainer>
{!user ? <FirstNav/> : < AppNavigator/>}
</NavigationContainer> */}