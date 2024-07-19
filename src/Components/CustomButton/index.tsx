import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./style";
import React from "react";
import { ButtonProps } from "./types";
const CustomButton:React.FC<ButtonProps>=({
    onPress,
    title,
    colour,
    parentStyle

})=> {

    return (
        <View style={[styles.container,parentStyle]}>
            <TouchableOpacity onPress={onPress} style={[styles.btn]}>
                    <Text style={[styles.text]}>{title}</Text>
             </TouchableOpacity>
        </View>

    )

}
export default CustomButton;