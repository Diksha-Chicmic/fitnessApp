import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./style";
import React from "react";
interface ButtonProps{

        onPress: () => void,
        title: string,
        colour?: string
        parentStyle?: StyleProp<ViewStyle>;

}
const CustomButton:React.FC<ButtonProps>=({
    onPress,
    title,
    colour,
    parentStyle

})=> {

    return (
        <View style={[styles.container,parentStyle]}>
            <TouchableOpacity onPress={onPress} style={[styles.btn]}>
                <View style={parentStyle}>
                    <Text style={[styles.text]}>{title}</Text>
                </View>

            </TouchableOpacity>
        </View>

    )

}
export default CustomButton;