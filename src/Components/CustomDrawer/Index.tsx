import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { authNavigationList } from "../../Constants/navigation";
import { ICONS } from "../../Constants/icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
//import { styles } from "./styles";

const CustomDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<authNavigationList>>();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer} >
      {ICONS.DRAWER({ width: 25, height: 25 })}
    </TouchableOpacity>
  );
};

export default CustomDrawer;