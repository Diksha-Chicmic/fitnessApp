import React, { useEffect } from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth";
import { styles } from "./style";

const LogOut = () => {
  useEffect(() => {
    auth().signOut();
  }, []);
  return (
    <View style={styles.conatiner}>
    </View>
  );
};

export default LogOut;