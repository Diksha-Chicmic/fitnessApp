import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../Components/CustomDrawer/Index";
import Home from "../Screens/MainScreens/Home";
import LogOut from "../Screens/MainScreens/LogOut";
import Settings from "../Screens/MainScreens/Settings";
import Premium from "../Screens/MainScreens/GetPremium";
import Notifications from "../Screens/MainScreens/Notifications";
import Community from "../Screens/MainScreens/Community";
import { authNavigationList } from "../Constants/navigation";
import { COLORS, SIZES } from "../Constants/commonStyles";
import { ICONS } from "../Constants/icons";
import { View } from "react-native";

const iconSize = {
  width: 25,
  height: 25,
};
const drawerIcon = (
  icon: (size: {
    width: number;
    height: number;
    color?: string;
  }) => React.ReactNode
) => {return () => {return <View style={{ left: 20 }}>{icon(iconSize)}</View>;};};

const Drawer = createDrawerNavigator<authNavigationList>();

const AuthNavigator = () => {

  const headerLeft = () => {
    return <CustomDrawer/>;
  };
  // const headerRight = () => {
  //   return <CustomDrawerRight />;
  // };

  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.PRIMARY.GREY,
          height: 140,
        },
        headerLeft,
        drawerStyle: {justifyContent: "center",},
        drawerContentContainerStyle: {top: "25%",},
        drawerLabelStyle: { color: "black", fontSize: SIZES.font13 },
        drawerActiveTintColor: COLORS.PRIMARY.PURPLE,
      }} >
      <Drawer.Screen name="Home" component={Home}
        options={{
         drawerIcon: drawerIcon(ICONS.HOME),
        //  headerRight,
           headerStyle: {
            backgroundColor: COLORS.PRIMARY.GREY,
            height: 140,
          },
          headerShown:true,
        }}
      />
      <Drawer.Screen name="Community" component={Community}
        options={{drawerIcon: drawerIcon(ICONS.COMMUNITY),}} />

      <Drawer.Screen name="Notifications" component={Notifications}
        options={{drawerIcon: drawerIcon(ICONS.BELL),}}/>

      <Drawer.Screen name="Settings" component={Settings}
       options={{drawerIcon: drawerIcon(ICONS.SETTINGS),}}/>

      <Drawer.Screen name="GetPremium" component={Premium}
        options={{ drawerIcon: drawerIcon(ICONS.PLANT),}}/>

      <Drawer.Screen name="LogOut" component={LogOut}
       options={{ drawerIcon: drawerIcon(ICONS.Lock),}}/>

    </Drawer.Navigator>
  );
};

export default AuthNavigator;