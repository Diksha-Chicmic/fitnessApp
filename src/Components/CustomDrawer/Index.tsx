import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { authNavigationList } from "../../Constants/navigation";
import { ICONS } from "../../Constants/icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const CustomDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<authNavigationList>>();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer} >
      {ICONS.DRAWER({ width: 20, height: 20 })}
    </TouchableOpacity>
  );
};

export default CustomDrawer;