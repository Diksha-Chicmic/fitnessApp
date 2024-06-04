import React, { useCallback } from "react";
import { Dimensions, SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Pressable, Alert } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { ICONS } from "../../Constants/icons";
import { styles } from "./style";


const CustomHeader = (props: NativeStackHeaderProps) => {

  const back = () => {
    if (props?.navigation.canGoBack()) {
      props?.navigation.goBack();
    }
  }

  const screenHeight = Dimensions.get('screen').height;
  const canGoBack = props?.navigation.canGoBack();
  console.log(canGoBack)

  return (
    <SafeAreaView style={[styles.parent, { height: screenHeight / 4.5 }]}>
      <View style={styles.container}>

        {canGoBack && <Pressable style={styles.backBtn} onPress={back} >
          {ICONS.LeftArrow({ width: 17, height: 17 })}
        </Pressable>
        }
        <Pressable onPress={back} style={styles.logo}>
          {ICONS.Logo({ width: 40, height: 40 })}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


const Header = (props: NativeStackHeaderProps) => <CustomHeader {...props} />;

export default Header;
